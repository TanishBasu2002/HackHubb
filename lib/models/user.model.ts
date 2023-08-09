import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id:{type:String,require:true},
    username: {type: String,unique: true,required: true,},
      name: {type: String,required: true,},
      image: String,
      bio: String,
      hacks: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Hacks",
        },
      ],
      onboarded: {type: Boolean,default: false,},
      communities: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Community",
        },
      ],
    });
    
    const User = mongoose.models.User || mongoose.model("User", userSchema);
    
    export default User;