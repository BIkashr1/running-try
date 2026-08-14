const https = require("https");

const target = "rise.eye2serve.com";
const port = 8443;

console.log(`Checking latency to ${target}:${port}...`);
const start = Date.now();

const req = https.request(
  {
    hostname: target,
    port: port,
    path: "/",
    method: "HEAD",
    rejectUnauthorized: false, 
  },
  (res) => {
    const end = Date.now();
    console.log(`✅ Total HTTPS Latency: ${end - start} ms`);
    console.log(`   HTTP Status: ${res.statusCode}`);
  }
);

req.on("error", (e) => {
  console.error(`❌ Error connecting: ${e.message}`);
});

req.end();
