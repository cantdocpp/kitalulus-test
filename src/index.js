import express from 'express';

// Import controllers
import { getUsers, getUserByName } from './controllers/user.controller';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/users', getUsers);
app.get('/users/:name', getUserByName);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
