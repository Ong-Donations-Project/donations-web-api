import { Server } from "./server";
// import { envs } from "./shared/envs";

(async () => {
  await main();
})();

async function main() {
  try {
    new Server(4000).start();
  } catch (error) {
    console.log(error);
  }
}
