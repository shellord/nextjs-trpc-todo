import { createRouter } from "~/server/createRouter";
import z from "zod";

export const todoRouter = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      greeting: `hello ${input?.text ?? "world"}`,
    };
  },
});
