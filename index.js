// Login authentication Using Middleware

// 1. Check if the user is logged in
// 2. If the user is not logged in, redirect to the login page
// 3. If the user is logged in, redirect to the home page

const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const authEmailMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    const validEmail = 'admin@gmail.com';
    const validPassword = 'admin';
    if (email === validEmail && password === validPassword) {
        console.log('Admin is logged in');
        next();
    } else {
        // res.send('Invalid email or password');
        res.send('<h3 style=color:red>Access Denied..!</h3>')
    }
};

app.post('/login', authEmailMiddleware, (req, res) => {
    res.send('<h3 style=color:green>Access Granted..!</h3>')
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});