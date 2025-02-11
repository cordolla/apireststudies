import fastify from "fastify";

const app = fastify();

app.get("/hello", () =>{
  return "olá oi";
});

app.listen({
  port: 3336,
}).then(() => {
  console.log("http server running");
});