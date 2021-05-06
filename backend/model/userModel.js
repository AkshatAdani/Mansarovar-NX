import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type: String, required: [true, "Please enter your name!"], trim: true},
    email:{type: String, required: [true, "Please enter your email!"],trim: true, unique: true},
    password:{type: String, required: [true, "Please enter your password!"]},
    isAdmin: {type: Boolean, default: false, required: true},
    isSeller: { type: Boolean, default: false, required: true },
    seller: {
        name: String,
        logo: String,
        description: String,
        rating: { type: Number, default: 0, required: true },
        numReviews: { type: Number, default: 0, required: true },
      },
}, {
    timestamps: true,
   }
);

const User = mongoose.model("User", userSchema);
export default User;