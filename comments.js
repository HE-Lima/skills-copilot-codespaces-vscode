// Create web server
// Create a web server using the Express library
const express = require('express');
const app = express();
app.use(express.json());

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
    }
    res.send(comment);
});

// Create a route to add a comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        content: req.body.content,
        upvotes: 0,
        downvotes: 0
    };
    comments.push(comment);
    res.send(comment);
});

// Create a route to upvote a comment
app.put('/comments/:id/upvote', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
    }
    comment.upvotes++;
    res.send(comment);
});

// Create a route to downvote a comment
app.put('/comments/:id/downvote', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
    }
    comment.downvotes++;
    res.send(comment);
});

// Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
    }
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});

// Set the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Create a variable to store comments
const comments = [
    { id: 1, content: 'Comment