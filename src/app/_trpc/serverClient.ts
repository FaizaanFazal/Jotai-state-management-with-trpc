import { createTRPCClient, httpBatchLink } from "@trpc/client";

import { AppRouter, appRouter } from "@/server";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

// export const serverClient = appRouter.createCaller({
//   links: [
//     httpBatchLink({
//       url: "http://localhost:3000/api/trpc",
//     }),
//   ],
// });

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type UserGetUser = RouterOutput['users']['getUsers'];

export const serverClient =  appRouter.createCaller({ ctx: {} });