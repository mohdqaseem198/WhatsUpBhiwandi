import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number : {
      type : Number,
      //Optional
    }
    ,
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ContactUs ||
  mongoose.model("ContactUs", ContactUsSchema);
