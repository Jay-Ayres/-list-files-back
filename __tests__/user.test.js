import request from "supertest";
import app from "../src/app";

describe("Folders", () => {
  it("test", async () => {
    const response = await request(app).get("/folders");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});
