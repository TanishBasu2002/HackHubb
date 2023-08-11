import mongoose from "mongoose";
const communitySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      parentId: {
        type: String,
      },
      children: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Hack",
        },
      ],
    });
    
    const Community = mongoose.models.Community || mongoose.model("Community", communitySchema);
    
    export default Community;