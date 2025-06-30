const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minlength: [3, "Title must be at least 3 characters"],
        },
        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Note", noteSchema);
