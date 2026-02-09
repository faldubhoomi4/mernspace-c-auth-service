import request from "supertest";
import app from "../../src/app.js";
import { describe, it, expect } from "vitest";

describe("POST/auth/register", () => {
    describe("give all filed", () => {
        it("should be retun 201", async () => {
            //aaa
            //arrange

            const userData = {
                firstname: "bhoomi",
                lastname: "faldu",
                email: "faldubhoomi4@gmailk.com",
                password: "bhoomi678",
            }
            //act
            const response = await request(app)
                .post("/auth/register").send(userData);

            //assert
            expect(response.statusCode).toBe(201);
        })
        it("should be valid jason responce", async () => {
            //aaa
            //arrange

            const userData = {
                firstname: "bhoomi",
                lastname: "faldu",
                email: "faldubhoomi4@gmailk.com",
                password: "bhoomi678",
            }
            //act
            const response = await request(app)
                .post("/auth/register").send(userData);

            //assert application /json utf-8
             expect((response.headers as Record <string, string>)["content-type"]).toEqual(expect.stringContaining("json"));
 
            it ("should persist the user in the database", async()=>{

            }, 

            )
 
            })
    describe("missing filed", () => {})

})
})