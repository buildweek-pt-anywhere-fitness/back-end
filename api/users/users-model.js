const db = require('../../data/db-config')

module.exports = {
    add,
    find,
    findByUsername
}

function add(user) {
    return db('users').insert(user)
}

function find() {
    return db('users as u')
    .innerJoin('roles as r', 'r.auth_code', 'u.auth_code')
    .select('u.id', 'u.username', 'r.name as role')
}

function findByUsername(username) {
    return db('users as u')
    .innerJoin('roles as r', 'r.auth_code', 'u.auth_code')
    .where('u.username', username)
    .first('u.id', 'u.username', 'u.password', 'r.name as role')
}
