const Contact = require('../models/Contact');


exports.createContact = async (req, res) => {
    const contact = await Contact.create(req.body);
    res.json(contact);
};

exports.getContact = async (req, res) => {
    const data = await Contact.find();
    res.json(data);
}

exports.removeContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
};