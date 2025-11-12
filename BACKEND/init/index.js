const mongoose=require("mongoose");
const Initdata=require("./data.js");
const Event=require("../models/events.js");
const mongoUrl="mongodb://127.0.0.1:27017/EventFlow";

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log("Error Connecting DB");
})
async function main() {
    await mongoose.connect(mongoUrl);
};

const initDB=async()=>{
    await Event.deleteMany({});
    Initdata.data=Initdata.data.map((obj)=>({...obj,
    owner:"68eea33acbf05bb013b94f54"}));
    await Event.insertMany(Initdata.data);
    console.log("Data Initialized successfully");
}
initDB();