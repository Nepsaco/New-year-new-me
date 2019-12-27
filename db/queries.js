const database = require('./knex')

module.exports = {

    user: {
        getAll : () => {
            return database('user')
        }
    },

    resolutions: {
        getAll: () => {
            return database('resolutions')
        }

    }
}
