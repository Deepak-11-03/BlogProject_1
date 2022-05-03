
   
const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const blogController = require('../controllers/blogController')
const mw = require('../middlewares/auth')

router.post("/author",  authorController.createAuthor)
router.post("/login", authorController.loginAuthor)
router.post('/blogs', mw.authentication, blogController.createBlog)
router.get('/getBlogs' , mw.authentication, blogController.getBlogs)
router.put('/blogs/:blogId', mw.authentication, mw.authorisation, blogController.updateBlogs)
router.delete('/blogs/:blogId', mw.authentication, mw.authorisation, blogController.deleteByBlogId)
router.delete('/blogs', mw.authentication, blogController.deleteByQuery)

module.exports = router;