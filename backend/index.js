const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const postRoutes = require('./routes/routes')

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);


app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',postRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = app