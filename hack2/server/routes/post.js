import express from 'express'
import Post from '../models/post'
import moment from 'moment'

const router = express.Router()

// DONE TODO 2-(1): create the 1st API (/api/allPosts)
router.get('/allPosts', (_, res) => {
    // console.log("Retrieving all posts");
    Post.find().sort({ timestamp: -1 }).limit(100).exec((err, response) => {
        if (err){
            res.send({message: "error", data: null})
        }
        // console.log(response)
        res.send({message: "success", data: response})
    });
});

// DONE TODO 3-(1): create the 2nd API (/api/postDetail)
router.get('/postDetail', async (req, res) => {
    console.log(Object.entries(req.query)[0][1])
    const pid = Object.entries(req.query)[0][1]
    try {
        const result = await Post.find({postId: pid})
        console.log(result)
        res.send({ message:"success", post: result })
    }
    catch(err) {
        res.send({ message:"error", post: null })
    }
    
    
})

// DONE TODO 4-(1): create the 3rd API (/api/newPost)
router.post('/newPost', async (req, res) => {
    try {
        console.log(req.body)
        const newPost = new Post (req.body)
        res.send({message: "success"})
        return newPost.save()
    } catch(e) { res.send({message: "error", post: null}) }
})

// TODO 5-(1): create the 4th API (/api/post)

export default router