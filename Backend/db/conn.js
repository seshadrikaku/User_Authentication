
const mongoose=require("mongoose")

const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected successful")
})
.catch((e)=>{
    console.log(e)
})