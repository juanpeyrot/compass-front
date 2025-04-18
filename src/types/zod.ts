import { z } from "zod";
import { RegisterFormValidator, LoginFormValidator, CreateQRFormValidator } from "../lib";
import { CreateURLFormValidator } from "../lib/validators/create-short-url";
import { AccessProtectedFormValidator } from "../lib/validators/access-protected";

export type TRegisterFormValidator = z.infer<typeof RegisterFormValidator>;
export type TLoginFormValidator = z.infer<typeof LoginFormValidator>;
export type TCreateURLFormValidator = z.infer<typeof CreateURLFormValidator>;
export type TCreateQRFormValidator = z.infer<typeof CreateQRFormValidator>;
export type TAccessProtectedFormValidator = z.infer<typeof AccessProtectedFormValidator>;