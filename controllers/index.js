const Post = require('../models/post')
const Comment  = require('../models/comment');


const createPost = async (req,res) =>{
    try{

        console.log(req.body)
        const content = req.body.content;
        const name = req.body.name;
        const location = req.body.location;
        const likes = req.body.likes;

        const post  = new Post({
            content : content,
            name : name,
            location : location,
            likes : likes
        })

        await post.save();

        return res.status(200).json(post)

    }catch(error){
        res.status(500).send({error:error.message})
    }
}

const getPosts = async (req,res) => {
    try{
        const response = await Post.find({})

        res.status(200).send(response)
    }catch(error){

    }
}


const changeLikes = async (req,res) =>{
    try{
        const post  = await Post.find({_id:req.body.postId})
        console.log(post)
        let newLikes = +post[0].likes;
        console.log(newLikes)

        req.body.bool?newLikes++:newLikes--

        console.log(req.body)

        const response = await Post.updateOne({_id:req.body.postId}, {$set:{likes:newLikes}})

        console.log(response)
        res.status(200).send(response)
    }catch(error){

    }
}

const createComment = async (req,res) =>{
    console.log('here')
    try{
        const name =  req.body.name
        const content = req.body.content
        const post_id =  req.body.post_id._id

        const comment ={
            name: name,
            content: content,
            post_id: post_id
        }

        
        const post = await Post.findOne({_id:post_id})
        
        let comments = post.comments

        const newPost = await Post.updateOne({_id:post_id},{$set:{comments:[...comments, comment]}})
        
        const lastPost = await Post.findOne({_id:post_id})

        console.log(lastPost)
        res.status(200).json(lastPost)

    }catch(error){

    }
}


module.exports = {
    createPost,
    getPosts,
    changeLikes,
    createComment
}