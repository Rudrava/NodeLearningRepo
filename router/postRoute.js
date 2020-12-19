const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()

// getting dataModels ie SCHEMA for our data
const PostModel = require('../models/Post');

// get all the posts
router.get('/',async (req, res) => {
    try{
        const posts = await PostModel.find()
        res.send(posts);
    } catch(err) {
        res.json({msg: err})
    }
})

router.post('/',async (req, res) => {
    const post = new PostModel({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savePost = await post.save()
        res.status(200).json(savePost)

    } catch(err) {
        res.status(404).json({msg: err})
    }
})

// get specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await PostModel.findById(req.params.postId)
        res.json(post)
    } catch(err) {
        res.json({msg: err})
    }
});

// delete a specific post
router.delete('/delete/:postId', async (req, res) => {
    try{
        const deletedPost = await PostModel.remove({_id: req.params.postId})
        res.json(deletedPost)
    } catch(err) {
        res.json({msg: err})
    }
})

// update post 
router.patch('/update/:postId', async (req, res) => {
    try {
        const updatedPost = await PostModel.updateOne({_id: req.params.postId}, {$set : {
            title : req.body.title,
            description : req.body.description
            }
        });
        res.json(updatedPost)
    } catch (error) {
        res.json({msg: error})
    }
})
module.exports = router