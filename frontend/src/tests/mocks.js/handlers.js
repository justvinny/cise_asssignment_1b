import { rest } from "msw";
import { mockArticles, mockPractices } from "../../../../database/mockData";

export const handlers = [
    rest.get("/api/practices", (_, res, ctx) => {
        return res(ctx.json(mockPractices));
    }),
    rest.get("/api/articles", (_, res, ctx) => {
        return res(ctx.json(mockArticles));
    }),
];