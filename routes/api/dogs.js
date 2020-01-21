const express = require('express');
const router = express.Router();
var dogsCtrl = require('../../controllers/dogs');

router.get('/', dogsCtrl.index);
router.get('/:id', dogsCtrl.show);
router.post('/', dogsCtrl.create);
router.delete('/:id', dogsCtrl.delete);
router.put('/:id', dogsCtrl.update);

module.exports = router;