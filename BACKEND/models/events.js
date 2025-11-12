const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const User=require("./user.js");


let eventsSchema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{
        type:String,
        default:"https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>{
            if(v === "" || v === null || v === undefined || v.trim() === "") {
                return "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            }
            return v;
        },
    },
    date:{
        type:Date,
        required:true,
    },
    entryFee:{
        type:Number,
        default:0,
        set:(fee)=>{
            if(fee === "" || fee === null || fee === undefined) {
                return 0;
            }
            return Number(fee);
        },
    },
    eventType:{
        type:String,
        required:true,
    },
    eventCategory:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
});

eventsSchema.post("findOneAndDelete",async(event)=>{
    if(event){
        await Review.deleteMany({_id :{$in: event.reviews}});
    }
    
});

const Event=mongoose.model("Event",eventsSchema);
module.exports=Event;