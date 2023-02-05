// REQUIRING MODULES
import mongoose from "mongoose";

// DECLARE THE SCHEMA OF THE MONGO MODEL
const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean
        },
        comments: {
            type: Array,
            default: []
        },
    },
    {
        timestamps: true
    }
)

// EXPORT THE MODULE
const Post = mongoose.model("Post", postSchema);
export default Post;