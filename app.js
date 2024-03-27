import express from 'express'
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log (`App listening at http://localhost:${port}`))

app.post('/login', function (req, res, next) {
    
    if (loginSuccess(req.body.username, req.body.password)) {
      // set username to the session
      req.session.username = req.body.username;
    }
  
    let coolData = getData(req.session.username);
    res.status(200).send(`Welcome ${coolData}`);
  })