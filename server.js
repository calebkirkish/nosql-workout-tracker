const express = require ('express');
const mongoose = require ('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/workoutdb', {
useNewUrlParser: true,
useFindAndModify: false
});

require('./routes/htmlRoute.js')(app);
require('./routes/api.js')(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

