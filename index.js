import Fastify from "fastify";

import routes from "./route";

const fastify = Fastify({ logger: true });

(async () => {
  await fastify.register(routes).ready();

  try {
    fastify.log.info(fastify.printRoutes());
    fastify.listen(3333, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
