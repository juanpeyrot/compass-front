import { UserPublicInfo } from "./user";

export interface Qr {
  id: string;
  qrImage: string;
  link: string;
  timesVisited: string;
  createdAt: string;
  createdBy: UserPublicInfo;
  token: string;
}