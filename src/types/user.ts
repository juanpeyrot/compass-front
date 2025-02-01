export interface User {
	username: string;
	email: string;
	id: string;
}

export interface UserPublicInfo {
	id: string;
	email: string;
	username: string;
	createdAt: string;
}

export interface LoginUser {
	user: UserPublicInfo;
	token: string;
}