const express = require ('express');
const logger = require('morgan');
const mongoose = require ('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(logger('dev'));

app.use(require('./routes/apiRoute.js'));
app.use(require('./routes/htmlRoute.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

