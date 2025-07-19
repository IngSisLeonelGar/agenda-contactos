const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactscontroller');

router.get('/', contactsController.getContacts);
router.post('/', contactsController.addContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
