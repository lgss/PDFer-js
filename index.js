const pdf = require('html-pdf');
const express = require('express');
var options = { format: 'Letter' };
const port = 3000;

app = express();
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req);
    return res.send('Received a GET HTTP method');
  });
  
  app.post('/', (req, res) => {
    res.responsecode = "200";
    pdf.create(req.body.html).toBuffer(function(err, buffer){
        return res.send(buffer);
    });
});
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
  
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );


