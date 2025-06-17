
import Note from '../models/Note.js';

export async function getAllNotes(req, res) {
    try{
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(notes);
    }   catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    } 
}

export async function getNoteById(req, res) {
    const { id } = req.params;

    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }       catch (error) {     
        console.error("Error fetching note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req, res) {
   

    
    try {
         const { title, content } = req.body;
        const newNote = new Note({
            title,
            content,
        });

        await newNote.save();
        res.status(201).json({ message: "Note created successfully"} );
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function updateNote(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { title, content, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteNote(req, res) {
    const {id} = req.params ;

    try {
        const deleteNote = await Note.findByIdAndDelete(id);
        if (!deleteNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json ({message : "node deleted succesfully "})
    }
    catch(error){
        console.error("error is raised ", error) ;
        res.status(500).json({message : " internal server error "})
    }
}