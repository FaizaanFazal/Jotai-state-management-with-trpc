import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };

// import { appRouter } from '@/server';
// import * as trpcNext from '@trpc/server/adapters/next';

// export default trpcNext.createNextApiHandler({
//   router: appRouter,
// });
