import mongoose from "mongoose";


type ConnectionObject ={
    isConnected? :number
}
const connection:ConnectionObject ={
     
}

// void is not care about what data will come
async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log(`Already connected to Database.`)
        return
    }

    try {
       const db = await mongoose.connect(process.env.MONGO_URI || "",{})
        console.log("db ",db);
        connection.isConnected =db.connections[0].readyState;
        console.log(`DB connected successfully.`)
    } catch (err) {
        console.log(`Database connection failed.: ${err}`)
        process.exit(1)
        
    }
 

}
export default dbConnect;