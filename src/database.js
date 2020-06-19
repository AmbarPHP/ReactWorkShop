import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', { useNewUrlParser: true , useUnifiedTopology: true});
        console.log("DB  is working");

      } catch (error) {
        handleError(error);
        console.log(error);
      }
}

