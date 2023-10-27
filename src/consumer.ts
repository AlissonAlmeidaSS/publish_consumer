import { Connection, Channel, connect, Message } from 'amqplib';
import { config } from 'dotenv';

config();
const amqp = require('amqplib/callback_api');

async function consume(): Promise<any> {
  amqp.connect('amqp://alisson:admin@localhost', (err, conn) => {});
  const conn: Connection = await connect(amqp);
  const channel: Channel = await conn.createChannel();

  await channel.consume('test', (message: Message) => {
    console.log(message.content.toString());
    return channel.ack(message);
  });
}

consume();
