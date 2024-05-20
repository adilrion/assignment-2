"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
let server;
// database connection
const main = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.db.host, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        server = app_1.default.listen(config_1.default.port, () => {
            console.log(`💚 Example app listening on port ${config_1.default.port}`);
        });
        console.log(`💚 Database connection successful`);
    }
    catch (error) {
        console.log('🔴 Something wrong here', error);
        process.exit(1);
    }
};
main();
