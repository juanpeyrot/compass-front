import { z } from "zod";

export const CreateURLFormValidator = z.object({
	link: z.string().url("Invalid URL format"),
	customShortUrl: z.string().optional(),
	password: z.string().optional(),
	description: z.string().optional(),
	includeQr: z.boolean().optional(),
});