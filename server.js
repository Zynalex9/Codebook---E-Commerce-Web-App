import jsonServer from 'json-server';
import auth from 'json-server-auth';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Resolve the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

// Configure auth middleware
const rules = auth.rewriter({
  // Specify your rules here if needed
});

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});