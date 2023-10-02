// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Define a route
// app.get('/', (req, res) => {
// //   res.send('Hello, Express!');
//   res.sendFile(__dirname + "index.html");
// });

// // Start the server

           
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('/', (req, res) => {
//   // Use the 'path.join()' method to construct the file path correctly
//   const filePath = path.join(__dirname,'public/index.ejs');
//   res.sendFile(filePath);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.) from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Define routes
const indexRouter = require('./routes/index.js');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
