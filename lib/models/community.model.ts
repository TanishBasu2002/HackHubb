import mongoose from "mongoose";

const communitieSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  hacks: [  
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hack", 
    },
  ],
  members:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User',
    }
  ],
});

const Community = mongoose.models.Community || mongoose.model("Community", communitieSchema);

export default Community;