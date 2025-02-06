import { z } from "zod";

export const CreateQRFormValidator = z.object({
  link: z.string().url("Invalid URL format")
});