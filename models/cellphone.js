const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cellphoneSchema = new Schema({
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    tags: [String],
    price: { type: Number, required: true },
    updated: { type: Date, default: Date.now },
    features: { size: null,
        RAM: null,
        OS: "",
        frontCamera: null,
        backCamera: null,
        others: ""
    }
});

const cellphone = mongoose.model("CellPhone", cellphoneSchema);

module.exports = cellphone;
