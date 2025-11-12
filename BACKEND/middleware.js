const Event=require("./models/events");
const Review=require("./models/review");
const ExpressError=require("./utils/ExpressError.js");
const {eventsSchema,reviewSchema}=require("./schema.js");


module.exports.isLoggedIn=(req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","Log in to proceed");
        return res.redirect("/login");
    }
    next();
};
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let event=await Event.findById(id);
    if(!event.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You dont have permission to edit/delete");
        return res.redirect(`/events/${id}`);
    }
    next();
};

module.exports.validateEvent=(req,res,next)=>{
    let result=eventsSchema.validate(req.body);
    if(result.error){
        let message=result.error.details.map((ele)=>ele.message).join(",");
        throw new ExpressError(400,message);
    }else{
        next();
    }
};

module.exports.validateReview=(req,res,next)=>{
    let result=reviewSchema.validate(req.body);
    if(result.error){
        let message=result.error.details.map((ele)=>ele.message).join(",");
        throw new ExpressError(400,message);
    }else{
        next();
    }
};

module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the auhtor of the review");
        return res.redirect(`/events/${id}`);
    }
    next();
};

