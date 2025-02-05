import { Qr } from "./qr";
import { UserPublicInfo } from "./user";

export interface Link {
	shortUrl: string,
	id: string,
  link: string,
	isProtected: boolean,
  password?: string,
	description?: string,
	clicks: number,
  createdAt: string,
	createdBy: UserPublicInfo,
	qr?: Qr
}

export interface LinkPublicInfo {
	id: string;
	shortUrl: string;
	link: string;
	createdAt: Date;
	isProtected: boolean;
	description: string;
	clicks: number;
	createdBy: UserPublicInfo;
	qr: Qr
}