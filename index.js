function startServer(port, lifeProof) {
  const express = require('express');
  
  const app = express()
  // const port = 3000
  // let lifeProof = 'Wazzup!';
  
  app.get('/', (req, res) => {
    res.send(`${lifeProof}`);
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

}

module.exports = startServer;
