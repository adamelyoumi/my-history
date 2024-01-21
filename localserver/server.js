const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 8080;

const db = new sqlite3.Database('localserver/page_visits.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database');
    db.run('CREATE TABLE IF NOT EXISTS page_visits (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, url TEXT)');
  }
});

app.use(bodyParser.json());

app.post('/api/page-visit', (req, res) => {
    const { url, timestamp } = req.body;

    console.log(url)
    
    db.run('INSERT INTO page_visits (url, timestamp) VALUES (?, ?)', [url, timestamp], function(err) {
        if (err) {
        console.error('Error inserting data into database:', err.message);
        res.status(500).send('Internal Server Error');
        } else {
        console.log(`Inserted page visit: ${url} at ${timestamp}`);
        res.status(200).send('OK');
        }
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
