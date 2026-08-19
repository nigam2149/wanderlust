const Listing = require("../models/listing");
const User = require("../models/user");

module.exports.index = async (req, res) => {
    let { category, search, sort, minPrice, maxPrice } = req.query;
    let filter = {};

    if(search){
        filter.$or = [
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            { title: { $regex: search, $options: "i" } },
        ];
    } else if(category){
        filter.category = category;
    }

    if(minPrice || maxPrice){
        filter.price = {};
        if(minPrice) filter.price.$gte = Number(minPrice);
        if(maxPrice) filter.price.$lte = Number(maxPrice);
    }

    let sortOption = {};
    if(sort === "price_asc") sortOption.price = 1;
    if(sort === "price_desc") sortOption.price = -1;

    let listingsData = await Listing.find(filter).sort(sortOption).populate("reviews");

    if(search && listingsData.length === 0){
        req.flash("error", `No listings available for "${search}"`);
        return res.redirect("/listings");
    }

    let allListings = listingsData.map(listing => {
        let avgRating = 0;
        if(listing.reviews.length > 0){
            let sum = listing.reviews.reduce((acc, r) => acc + r.rating, 0);
            avgRating = (sum / listing.reviews.length).toFixed(1);
        }
        let obj = listing.toObject();
        obj.avgRating = avgRating;
        obj.reviewCount = listing.reviews.length;
        return obj;
    });

    let wishlist = [];
    if(req.user && req.user.wishlist){
        wishlist = req.user.wishlist.map(id => id.toString());
    }

    res.render("listings/index.ejs", { allListings, wishlist, category, search, sort, minPrice, maxPrice });
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({path:"reviews",
    populate:{path:"author",}
})
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let avgRating = 0;
    if(listing.reviews.length > 0){
        let sum = listing.reviews.reduce((acc, r) => acc + r.rating, 0);
        avgRating = (sum / listing.reviews.length).toFixed(1);
    }

    let similarListings = await Listing.find({
        category: listing.category,
        _id: { $ne: listing._id }
    }).limit(4);

    let inWishlist = false;
    if(req.user && req.user.wishlist){
        inWishlist = req.user.wishlist.map(i=>i.toString()).includes(listing._id.toString());
    }

    res.render("listings/show.ejs",{listing, avgRating, similarListings, inWishlist});
};

module.exports.createListing=async(req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;

    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename}; 
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};

module.exports.toggleWishlist = async (req, res) => {
    let { id } = req.params;
    let user = await User.findById(req.user._id);

    if(user.wishlist.includes(id)){
        user.wishlist.pull(id);
        req.flash("success", "Removed from wishlist");
    } else {
        user.wishlist.push(id);
        req.flash("success", "Added to wishlist");
    }
    await user.save();
    res.redirect(req.get("Referrer") || "/listings");
};
module.exports.showWishlist = async (req, res) => {
    let user = await User.findById(req.user._id).populate("wishlist");
    res.render("listings/wishlist.ejs", { wishlistItems: user.wishlist });
};