import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000
// link css to ejs 
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))


const posts = [
    {
        id: 0,
        title: "This is my first post",
        content: "This is my first content."
    },
    {
        id: 1,
        title: "This is my second post",
        content: "This is my second content."
    },
    {
        id: 2,
        title: "This is my third post",
        content: "This is my third content."
    },
]

app.get("/", (req, res) => {
    res.render('index.ejs', { posts: posts })
})

app.get("/post/:id", (req, res) => {
    const post = posts.find((post) => post.id == req.params.id)
    res.render('post.ejs', { post: post })
})

app.get('/add', (req, res) => {
    res.render('post.ejs')
})

app.post('/add', (req, res) => {
    const post = {
        id: new Date().getTime(),
        title: req.body.title,
        content: req.body.content
    }
    posts.push(post)
    res.redirect('/')
})

app.post('/update/:id', (req, res) => {
    const updatedPost = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content
    }

    const idx = posts.findIndex((post) => post.id == req.params.id)
    posts[idx].title = updatedPost.title
    posts[idx].content = updatedPost.content
    res.redirect('/')
})

app.post('/delete/:id', (req, res) => {
    const idx = posts.findIndex((post) => post.id == req.params.id)
    posts.splice(idx, 1)
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


