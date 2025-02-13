import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/hello", async () =>{
  const transactions = await knex("transactions").insert({
    id: crypto.randomUUID(),
    title: "Test Transaction",
    amount: 100.00,
  }).returning("*");

  return transactions;
});

app
  .listen({
    port: env.PORT,
  }).then(() => {
    console.log("http server running");
  });