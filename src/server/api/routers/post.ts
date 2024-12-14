import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Mocked DB
interface Post {
  id: number;
  name: string;
}
const posts: Post[] = [
  {
    id: 1,
    name: "Hello World",
  },
];

export const postRouter = createTRPCRouter({
  status: publicProcedure
    .query(async () => {
      const data = await fetch("http://10.0.43.192")
      return data.json()
    }),
  
  seating: publicProcedure
    .query(async () => {
      const today = new Date();
      const day = today.getDate();

      if (day % 2 === 0) {
        return "Harvey";
      } else {
        return "Andrew";
      }
  }),
});
