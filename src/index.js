import server from './server';

const listener = server().listen(process.argv[2] || 0, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
