const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    dogName: {type: String, required: true},
    breed: {type: String, default: 'Mixed'},
    age: {type: Number, default: 0},
    numWalks: {type: Number, default: 0},
    numFeedings: {type: Number, default: 2},
    numMeds: {type: Number, default: 0},
},{
    timestamps: true
});

dogSchema.pre('save', function(next) {
    this.dogName = this.dogName.toUpperCase();
    next();
  });

module.exports = mongoose.model('Dog', dogSchema);