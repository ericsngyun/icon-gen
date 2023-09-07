import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
<<<<<<< HEAD
} from "~/server/api/trpc";
=======
} from "@/server/api/trpc";
>>>>>>> 800935d7c5162c413a188d0767ebf32e8670661c

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
