import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //who is subscriber
      ref: "User",
    },

    channel: {
      type: Schema.Types.ObjectId, //who is subscribering
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.Schema("Subscription", subscriptionSchema);
