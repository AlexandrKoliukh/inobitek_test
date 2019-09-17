import server from './server';
import { serverConfig } from './config';

server().listen(serverConfig.port, () => {
  console.log(`app is running on port ${serverConfig.port}`);
});
