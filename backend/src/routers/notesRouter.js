import express from "express"
import { getNotes, getNoteByID, createNote } from "../controllers/notesController.js"


const router = express.Router()

router.get("/", async (req, res) => {
    const users = await getNotes()
    res.status(200).send(users)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const note = await getNoteByID(id)

    if (!note)
        return res.status(404).send({ message: "Invalid id!" })

    res.status(200).send(note)
})

router.post("/", async (req, res) => {
    const { title, description } = req.body
    const note = await createNote(title, description)

    if (!note)
        return res.status(400).send({ message: "Cannot create note!" })

    res.status(200).send(note)
})

export default router