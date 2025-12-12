const database = require('../database/connect');

class DiaryEntry {

    constructor({ diary_id, created, title, content }) {
        this.diary_id = diary_id;
        this.created = created;
        this.title = title;
        this.content = content;
    }

    static async getAll() {
        const response = await database.query(
            "SELECT * FROM diary_entries ORDER BY created DESC;"
        );

        if (response.rows.length === 0) {
            throw new Error("No diary entries available.");
        }
        return response.rows.map((e) => new DiaryEntry(e));
    }

    // Get one entry by the id 

    static async getOneById(id) {
        const response = await db.query(
            "SELECT * FROM diary_entries WHERE diary_id = $1;",
            [id]
        );

        if (response.rows.length !== 1) {
            throw new Error("Unable to locate diary entry.");
        }

        return new DiaryEntry(response.rows[0]);
    }

    // create a new entry 

    static async create(data) {
        const { title, content, created } = data;

        if (!title || !content) {
            throw new Error("Title and content are required.");
        }

        if (created) {
            const response = await db.query(
                `INSERT INTO diary_entries (created, title, content)
         VALUES ($1, $2, $3)
         RETURNING *;`,
                [created, title, content]
            );
            return new DiaryEntry(response.rows[0]);
        } else {
            const response = await db.query(
                `INSERT INTO diary_entries (title, content)
         VALUES ($1, $2)
         RETURNING *;`,
                [title, content]
            );
            return new DiaryEntry(response.rows[0]);
        }
    }

    // Update the entry by title and by content 

    async update(data) {
        const newTitle = data.title ?? this.title;
        const newContent = data.content ?? this.content;

        const response = await db.query(
            `UPDATE diary_entries
       SET title = $1, content = $2
       WHERE diary_id = $3
       RETURNING *;`,
            [newTitle, newContent, this.diary_id]
        );

        if (response.rows.length !== 1) {
            throw new Error("Unable to update diary entry.");
        }

        // update this object too (nice for explaining)
        this.title = response.rows[0].title;
        this.content = response.rows[0].content;
        this.created = response.rows[0].created;

        return new DiaryEntry(response.rows[0]);
    }

    // delete the entry 
      async destroy() {
    const response = await db.query(
      "DELETE FROM diary_entries WHERE diary_id = $1 RETURNING *;",
      [this.diary_id]
    );

    if (response.rows.length !== 1) {
      throw new Error("Unable to delete diary entry.");
    }

    return new DiaryEntry(response.rows[0]);
  }


}

module.exports = DiaryEntry;