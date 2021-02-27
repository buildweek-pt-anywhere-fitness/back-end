// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find,
    add,
    findById,
    update,
    remove,

};

function find() {
    return db('classes');
}

function add(classes) {
    return db('classes').insert(classes)
    // .then(object => {
    //     return findById(object[0]);
    // })
}

function findById(id) {
    return db('classes')
    .where({id})
    .first();
}

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