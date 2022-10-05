const express = require('express')
const { marked } = require('marked')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
    var content = fs.readFileSync('views/markdown/home.md', 'utf-8')
    res.render('home', {content: marked(content)});
})

router.get('/project', (req, res) => {
    var content = fs.readFileSync('views/markdown/project.md', 'utf-8')
    res.render('project', {content: marked(content)})
})

router.get('/contact', (req, res) => {
    var content = fs.readFileSync('views/markdown/content.md', 'utf-8')
    res.render('content', {content: marked(content)})
})

module.exports = router