const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')      // localhost:5000/blog run in the google
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the about route
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch the blogpost for ${req.params.slug}`)  //http://localhost:5000/blog/blogpost/intro-to-padosi Run in the google
  })

module.exports = router