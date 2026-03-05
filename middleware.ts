import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

// ВОТ ЗДЕСЬ (6-я строка) добавлено слово async
export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    // Твоя 8-я строка теперь будет работать правильно
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};