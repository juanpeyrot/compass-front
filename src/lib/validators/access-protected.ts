import { z } from "zod";

export const AccessProtectedFormValidator = z.object({
	password: z.string(),
});