const db = require('../db')

class RowController {
    async createRow(req, res) {
        const {date, name, amount, distance} = req.body
        const newRow = await db.query("INSERT INTO row (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING *", [date, name, amount, distance])
        res.json(newRow.rows[0])
    }
    async getRows(req, res) {
        const rows = await db.query("SELECT * FROM row")
        res.json(rows.rows)
    }
    async getOneRow(req, res) {
        const id = req.params.id
        const row = await db.query("SELECT * FROM row where id = $1", [id])
        res.json(row.rows[0])
    }
    async updateRow(req, res) {
        const {id, date, name, amount, distance} = req.body
        const row = await db.query("UPDATE row set date = $1 , name = $2, amount = $3, distance = $4 where id = $5 RETURNING *", [date, name, amount, distance, id])
        res.json(row.rows[0])
    }
    async deleteRow(req, res) {
        const id = req.params.id
        const row = await db.query("DELETE FROM row where id = $1", [id])
        res.json(row.rows[0])
    }
}

module.exports = new RowController()