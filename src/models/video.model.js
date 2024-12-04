import mongoose, { model, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      // cloudinary url
      type: String,
      required: true,
    },

    thumbNail: {
      // cloudinary url
      type: String,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
      capitalize: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

const Video = model("Video", videoSchema);
