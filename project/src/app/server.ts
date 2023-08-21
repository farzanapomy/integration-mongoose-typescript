import { Server } from 'http';
import app from './app';

let server: Server;

async function bootstrap() {
  app.listen(5000, () => {
    console.log('Server is listening on port', 5000);
  });
}

bootstrap();
