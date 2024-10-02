const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'tuckerroth',
//     host: 'localhost',
//     database: 'shoppinglist',
//     password: '',
//     port: 5432,
// })

console.log('env variables are: ', process.env.POSTGRES_HOST, process.env.POSTGRES_DB);

const pool = new Pool(
    {
        host: process.env.POSTGRES_HOST || 'localhost',
        database: process.env.POSTGRES_DB || 'shoppinglist',
        user: process.env.POSTGRES_USER || 'shoplistuser',
        password: process.env.POSTGRES_PASSWORD || 'mypassword',
        port: 5432,
    }
)

const getShoplistItems = (request, response) => {
    pool.query('SELECT * FROM shoplist_items ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getListItem = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM shoplist_items WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createShoplistItem = (request, response) => {
    const { itemname, description, quantity, purchased } = request.body;

    pool.query('INSERT INTO shoplist_items (itemname, description, quantity, purchased) VALUES ($1, $2, $3, $4) RETURNING *',
        [itemname, description, quantity, purchased],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows[0]);
    })
}

const updateListItem = (request, response) => {
    const id = parseInt(request.params.id)
    const { itemname, description, quantity, purchased } = request.body

    pool.query(
        'UPDATE shoplist_items SET itemname = $1, description = $2, quantity = $3, purchased = $4 WHERE id = $5 RETURNING *',
        [itemname, description, quantity, purchased, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows[0]);
        }
    )
}

const deleteListItem = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM shoplist_items WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Item deleted with ID: ${id}`)
    })
}

module.exports = {
    getShoplistItems,
    getListItem,
    createShoplistItem,
    updateListItem,
    deleteListItem,
}