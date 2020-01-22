const Dog = require('../models/dog');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update,
    addNote
};

async function index (req, res) {
    const dogs = await Dog.find({});
    res.status(200).json(dogs);
}

async function show(req, res) {
    const dog = await Dog.findById(req.params.id);
    res.status(200).json(dog);
  }
  
  async function create(req, res) {
    console.log("HITTING!!!!")
    const dog = await Dog.create(req.body);
    res.status(201).json(dog);
  }
  
  async function deleteOne(req, res) {
    const deletedDog = await Dog.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedDog);
  }
  
  async function update(req, res) {
    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedDog);
  }

  async function addNote(req, res) {
    const dog = await Dog.findById(req.params.id);
    dog.notes.push(req.body.note)
    dog.save();
    res.status(200).json(dog.notes);
  }