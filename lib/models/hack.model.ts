import mongoose from "mongoose";
const hackSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
      },
      image: {
        type: String,
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
    
    const Hack = mongoose.models.Hack || mongoose.model("Hack", hackSchema);
    
    export default Hack;