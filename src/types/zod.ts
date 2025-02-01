import { z } from "zod";
import { RegisterFormValidator, LoginFormValidator } from "../lib";

export type TRegisterFormValidator = z.infer<typeof RegisterFormValidator>;
export type TLoginFormValidator = z.infer<typeof LoginFormValidator>;