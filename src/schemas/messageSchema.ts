import { string, z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content most be at least 10 charachters" })
    .max(300, { message: "Content most be no longer then 300 charachters" }),
});
