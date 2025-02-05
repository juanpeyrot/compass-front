import { z } from "zod";
import { RegisterFormValidator, LoginFormValidator } from "../lib";
import { CreateURLFormValidator } from "../lib/validators/create-short-url";

export type TRegisterFormValidator = z.infer<typeof RegisterFormValidator>;
export type TLoginFormValidator = z.infer<typeof LoginFormValidator>;
export type TCreateURLFormValidator = z.infer<typeof CreateURLFormValidator>;