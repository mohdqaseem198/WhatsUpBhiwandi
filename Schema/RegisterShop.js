
import mongoose from "mongoose";

const RegisterShopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images : [
      {
      type : String,
      required : true
    }
  ]
    ,
    email: {
      type: String,
      required: true,
    },

    owner: {
      type: String,   // storing User _id as string
      
    },

  },
  { timestamps: true }
);

export default mongoose.models.RegisterShop ||
  mongoose.model("RegisterShop", RegisterShopSchema);
