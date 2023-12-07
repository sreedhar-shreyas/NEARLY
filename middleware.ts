export { default } from "next-auth/middleware"

export const config = { 
  matcher: [
    "/connections",
    "/favorites",
    "/properties",
    "/reservations",
    "/adminpanel"
  ]
};
