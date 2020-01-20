const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    dogName: String,
    numWalks: Number,
    numFeedings: Number,
    numMeds: Number
},{
    timestamps: true
});

dogSchema.pre('save', function(next) {
    this.dogName = this.dogName.toUpperCase();
    next();
  });

module.exports = mongoose.model('Dog', dogSchema);