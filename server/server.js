const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const directory = process.env.PUBLIC || 'client/public';

app.use('/', express.static(directory));
app.listen(port, () => { console.log(`Listening on port ${port}. Serving '${directory}'.`) });
