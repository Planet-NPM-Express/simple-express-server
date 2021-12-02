function startServer(port, lifeProof) {
  const express = require('express');
  const app = express()
  
  app.get('/', (req, res) => {
    res.send(`${lifeProof}`);
  });
  
  app.listen(port, () => {
    console.log(`Simple Express Server 1239 listening at http://localhost:${port}`)
  });
}

module.exports = startServer;
