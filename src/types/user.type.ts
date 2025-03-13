export const userRole = {
  SUPERADMIN: "super-admin",
  ADMIN: "admin",
  USER: "user",
};

export type TUser = {
  userEmail: string;
  userID: string;
  userRole: string;
  iat: number;
  exp: number;
};
