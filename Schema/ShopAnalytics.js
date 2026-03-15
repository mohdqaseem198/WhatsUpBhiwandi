import mongoose from "mongoose";

const ShopAnalyticsSchema = new mongoose.Schema(
  {
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RegisterShop",
      required: true
    },

    date: {
      type: String,
      required: true
    },

    views: {
      type: Number,
      default: 0
    },

    clicks: {
      type: Number,
      default: 0
    }

  },
  { timestamps: true }
);

export default mongoose.models.ShopAnalytics ||
  mongoose.model("ShopAnalytics", ShopAnalyticsSchema);