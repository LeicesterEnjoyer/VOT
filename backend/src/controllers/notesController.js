import pool from "../database/src/config.js";


export async function getNotes() {
    const [result] = await pool.query("SELECT * FROM Note")
    return result
}

export async function getNoteByID(id) {
    const [result] = await pool.query("SELECT * FROM Note WHERE id = ?", [id])
    return result[0]
}

export async function createNote(title, description) {
    const result = await pool.query("INSERT INTO Note (title, description) VALUES (?, ?)", [title, description])
    return result
}