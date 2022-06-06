import { createRouter } from "~/server/createRouter";
import z from "zod";
import { prisma } from "~/utils/prisma";

export const todoRouter = createRouter()
  .mutation("add", {
    input: z.object({
      text: z.string(),
    }),
    async resolve({ input }) {
      const todo = await prisma.todo.create({
        data: {
          text: input.text,
        },
      });
      return todo;
    },
  })
  .query("all", {
    async resolve() {
      return prisma.todo.findMany();
    },
  })
  .mutation("delete", {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      await prisma.todo.delete({
        where: {
          id: input.id,
        },
      });
    },
  });
