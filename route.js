export default async function (fastify) {
  fastify.addSchema({
    $id: "CreateUser",
    properties: { name: { type: "string" } },
    required: ["name"],
    type: "object",
  });

  fastify.post(
    "/",
    {
      schema: {
        body: { $ref: "CreateUser#" },
      },
    },
    async (_req, reply) => {
      reply.send({});
    }
  );
}
