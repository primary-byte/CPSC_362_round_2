const config = require('config.json');
const db = require('_helpers/db');

module.exports ={
    create
}

async function create(params) {
    // validate

    const post = new db.Post(params);

    // save account
    await post.save();

    return basicDetails(post);
}

