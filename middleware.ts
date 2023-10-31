import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/api/webhook','/api/webhook/clerk',"/api/uploadthing",],
    ignoredRoutes:['/api/webhook','/api/webhook/clerk',]
});
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};