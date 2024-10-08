const express = require("express");
const {json, request} = require("express");
const db = require('./shoplist-item-queries');
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get('/api/shoplistitems', db.getShoplistItems);
app.get('/api/shoplist/:id', db.getListItem);
app.post('/api/shoplistitem', (req, res) => {
    db.createShoplistItem(req, res);
});

app.put('/api/shoplistitem/:id', (req, res) => {
    db.updateListItem(req, res);
});

app.delete('/api/shoplistitem/:id', (req, res) => {
    db.deleteListItem(req, res);
});

app.get("/api", (req, res) => {
    res.json({
        message: "Server found!"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});