const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");
const Review=require("../models/review.js");
const Event=require("../models/events.js");
const {isLoggedIn,validateReview,isReviewAuthor}=require("../middleware.js");


router.post("/",isLoggedIn,validateReview,wrapAsync(async(req,res)=>{
    let event=await Event.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    event.reviews.push(newReview);
    await newReview.save();
    await event.save();

    console.log("New review saved");
    req.flash("success", "Thank you for your review! Your feedback matters the most.");
    res.redirect(`/events/${event._id}`);
}));

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;
    await Event.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("info", "Review has been removed successfully.");
    res.redirect(`/events/${id}`);
}));

module.exports=router;