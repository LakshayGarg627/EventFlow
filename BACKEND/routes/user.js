const express=require("express");
const router=express.Router();
const User=require("../models/user");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware");

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});
router.post("/signup",async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({username,email});
        const registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.flash("success","Registered Successfully");
        res.redirect("/login");
    }
    catch(err){
        console.log("Username already exists");
        req.flash("error","User with the mail already exists");
        res.redirect("/signup");
    }
});
router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});
router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),
    async(req,res)=>{
    req.flash("success","Logged in successfully");
    let redirectUrl=res.locals.redirectUrl || "/events";
    res.redirect(redirectUrl);
});

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect("/login");
    });
});

router.get("/profile",(req,res)=>{
    res.send("My profile page working");
});
module.exports=router;