import { pogo } from './dependencies.ts';

const server = pogo.server({ port: 3000 });

server.route('/', { method: 'GET' }, () => {
  return 'Orale 🦖';
});

export default server;
