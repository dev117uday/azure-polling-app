import { createClient } from 'redis';
import config from '../config';

const redis = createClient({
  password: `${process.env.RPASS}`,
  socket: {
      host: `${process.env.RURL}`,
      port: 19001
  }
});

redis.on('error', (err) => console.log('Redis Client Error', err));

export default redis;
