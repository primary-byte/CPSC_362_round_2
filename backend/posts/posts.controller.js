const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.post('/create', createSchema, create);


router.get('/getAllPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true } , function(err){
        if(err) throw err;
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

function createSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {
    accountService.create(req.body)
        .then(account => res.json(account))
        .catch(next);
}