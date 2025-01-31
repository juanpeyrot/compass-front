import { z } from "zod";
import { FormValidator } from "../lib";

export type TAuthFormValidator = z.infer<typeof FormValidator>;