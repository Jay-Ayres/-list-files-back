import dotenv from "dotenv";

console.log("test");
dotenv.config({ path: process.env.NODE_ENV == "test" ? ".env.test" : ".env" });
//dotenv.config({ path: ".env" });
