const mongoose = require("mongoose");
const Note = require("../models/Note");

exports.getAllNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

exports.createNote = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res
            .status(400)
            .json({ error: "Title and content are required" });
    }

    try {
        const note = new Note({ title, content });
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateNote = async (req, res) => {
    const { id } = req.params.id;
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid note ID" });
    }

    try {
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        if (!title || !content) {
            return res
                .status(400)
                .json({ error: "Title and content are required" });
        }

        const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        res.json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteNote = async (req, res) => {
	const { id } = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid note ID" });
    }

	try {		
		const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

		await Note.findByIdAndDelete(id);
		res.json({ message: "Note deleted" });
	} catch (error) {
		res.status(400).json({error: error.message})
	}
};
