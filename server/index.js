const express = require("express");
const {json} = require("express");
const db = require('./shoplist-item-queries');
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get('/api/shoplistitems', db.getShoplistItems);
app.get('/api/shoplist/:id', db.getListItem);
app.post('/api/shoplistItem', db.getListItem);
app.put('/api/shoplistItem/:id', db.updateListItem);
app.delete('/api/shoplistItem/:id', db.deleteListItem);

app.get("/api", (req, res) => {
    res.json({
        message: "Server found!"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});