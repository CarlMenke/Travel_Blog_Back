const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req,res) => res.send('I am G(root)'))

router.post('/createPost', controllers.createPost)

router.post('/createComment', controllers.createComment)

router.get('/allPosts', controllers.getPosts)

router.put('/updateLikes', controllers.changeLikes)




module.exports = router