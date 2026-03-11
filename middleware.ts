import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/profile(.*)',
  '/appointment(.*)',
  '/contacts(.*)',
  '/services(.*)',
  '/goszakup(.*)',
  '/finance(.*)',
  '/vacancies(.*)',
  '/zozh(.*)',
  '/patients(.*)',
  '/gallery(.*)',
  '/director-blog(.*)',
  '/about(.*)',
  '/news(.*)',
  '/info(.*)',
  '/journals(.*)',
  '/paid-services(.*)',
  '/ads(.*)',
  '/npa(.*)',
  '/free-help(.*)',
  '/api(.*)'
]);


// ВОТ ЗДЕСЬ (6-я строка) добавлено слово async
export default clerkMiddleware(async (auth, request) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  // Protect all non-public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  // Specifically protect /admin route for doctors/admins only
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (role !== 'admin' && role !== 'doctor') {
      return Response.redirect(new URL('/', request.url));
    }
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};