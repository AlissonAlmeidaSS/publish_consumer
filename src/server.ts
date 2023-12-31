import express, { Router, Request, Response } from 'express';
import { Connection, Channel, connect } from 'amqplib';
import { config } from 'dotenv';

config();
const app = express();
const router = Router();
const port = process.env.PORT || 3333;
const amqp = require('amqplib/callback_api');


app.use(express.json());

router.post('', async (req: Request, res: Response) => {
  try {
    const opt = { credentials: require('amqplib').credentials.plain('alisson', 'admin') };
    const { queue, message } = req.body;
    const conn: Connection = await connect(amqp);
    const channel: Channel = await amqp.createChannel();
    channel.sendToQueue(queue, Buffer.from(message));
    return res.status(200).send('Mensagem enviada com sucesso');
  } catch(erro) {
    return res.status(500).send(erro.message);
  }
});

app.use(router);
app.listen(port, () => console.log(`Servico (server) rodando na porta: ${port}`));
