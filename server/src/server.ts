// Back-end API RESTful
import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./route";

const app = Fastify();


app.register(cors)
app.register(appRoutes);

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then (() => {
  console.log('HTTP Serve running')
})