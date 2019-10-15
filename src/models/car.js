const { Schema, model } = mongoose;

const CarSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Car', CarSchema);