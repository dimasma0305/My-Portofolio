const express = require('express')
const { marked } = require('marked')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/project', (req, res) => {
    var content = fs.readFileSync('views/markdown/project.md', 'utf-8')
    res.render('project', {content: marked(content)})
})


router.get('/contact', (req, res) => {
    res.send('under construct')
})

module.exports = router