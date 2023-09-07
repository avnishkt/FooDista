const express = require('express');
const app = express();
const connectDatabase = require('./connectdb/db');
const router = require('./routes/userRoutes');
const routerf = require('./routes/Displaydata');
const routerDta = require('./routes/OrderData');

connectDatabase();

const port = 5000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'https://glittering-kitsune-4692ca.netlify.app');
    res.header(
        "Access-Control-Allow-Headers",
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    
    res.send("Hello world, I am the backend!");
});

app.use('/api/', router);
app.use('/api/', routerf);
app.use('/api/', routerDta);



app.listen(port, () => {
    console.log("Server started and listening on port", port);
});
