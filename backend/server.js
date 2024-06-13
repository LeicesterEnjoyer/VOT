import express from "express"
import cors from "cors"
import notesRouter from "./src/routers/notesRouter.js"

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use("/notes", notesRouter)

app.listen(PORT, () => {
    console.log(`Server working on Port:${PORT}...`)
})