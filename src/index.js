import { serverPort as port } from "./config/environment";
import { initMongoDB } from "./database/database";
import server from "./services/server";

const init = async () => {
    await initMongoDB();
    server.listen(port, () => {
        console.log(`API is listening on http://localhost:${port}/`);
    })
}

init();