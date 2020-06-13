import {
  serve,
  Server,
  ServerRequest,
} from "https://deno.land/std@0.57.0/http/server.ts";

// Creates server on port 3000
const server: Server = serve({ port: 3000 });

// Handle an infinite number of requests for as long as server is running
for await (const req: ServerRequest of server) {
  console.log("Hello from DENO");
  req.respond({ body: "I'm DENO" });
}
