const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

function memoryIntensiveTask() {
    const largeArray = [];
    for (let i = 0; i < 1e7; i++) {
      largeArray.push(i);
    }
    return largeArray;
  }


app.get('/', (req, res) => {
    for(let i=1; i<=10; i++){
        memoryIntensiveTask();
    }
    res.send('Backend completed');
});

function cpuIntensiveTask() {
    let total = 0;
    for (let i = 0; i < 1e9; i++) {
      total += i;
    }
    return total;
  }
  
  // Call this function in your route handler
  app.get('/heavy-task', (req, res) => {
    const result = cpuIntensiveTask();
    res.send(`Result: ${result}`);
  });
  

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
