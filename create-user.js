const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite'); // or your database file path

const username = "admin";
const email = "admin@example.com";
const password = "yourpassword"; // (Ideally hashed with bcrypt in production)

db.run(`INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)`, 
    [username, email, password, 1], 
    function(err) {
        if (err) {
            console.error("Error creating user:", err.message);
        } else {
            console.log(`User created successfully with ID: ${this.lastID}`);
        }
    }
);

