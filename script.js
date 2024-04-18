
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());


app.post('/register', (req, res) => {
  const { id, fullName, address, status } = req.body;
  let fee;

  if (status === 'student') {
    fee = 10;
  } else if (status === 'staff') {
    fee = 50;
  } else if (status === 'volunteer') {
    fee = 0;
  }

  const registrationInfo = {
    id: id,
    fullName: fullName,
    address: address,
    status: status,
    fee: fee
  };

  res.json(registrationInfo);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
