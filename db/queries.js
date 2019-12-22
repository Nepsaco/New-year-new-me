const knex = require('./knex')

module.exports = {

    User: {
        getAll : () => {
            return knex('user')
        }
    }
}
