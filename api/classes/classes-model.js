// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find,
    add,
    findById,
    update,
    remove,
    findClients,
    // addClient
};

function find() {
    return db('classes');
}

function add(classes) {
    return db('classes').insert(classes)
}

function findById(id) {
    return db('classes')
    .where({id})
    .first();
}

function findClients(id) {
    return db('classes')
    .join('users', 'classes.id', 'users.class_id')
    .select('classes.id', 'classes.name', 'users.username')
    .where({ class_id: id})
}

// function addClient(data, id) {
//     return db('users')
//     .insert(data)
//     .where('class_id', id)
// }

function update(changes, id) {
    return db('classes')
    .where({ id })
    .update(changes)
    .then(count => {
        return findById(id)
    });
}

function remove(id) {
    return db('classes')
    .where({id})
    .del();
}