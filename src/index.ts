import express from 'express';

import {User,UserRole} from '@common'

const newUse : User = {
    id: 1,
    name: 'John Doe',
    email: 'test@test.com.com',
    rol: UserRole.ADMIN
}

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged me');
  console.log(newUse);
  res.send('pong');
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
})