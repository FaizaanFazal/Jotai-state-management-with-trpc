// import { atom } from 'jotai'
// import { createTRPCJotai } from 'jotai-trpc'
// import { httpLink } from '@trpc/client';
// import { atomWithQuery } from 'jotai/query';
// import { appRouter, type AppRouter } from "@/server";
// import { useAtom } from 'jotai';
// // import { atomWithQuery } from 'jotai-tanstack-query';

import { atom } from "jotai";
import { trpc } from "./client";




const getUsers = trpc.users.getUsers.useQuery();
export const UsersAtom = atom(getUsers)

// const jotaiClient = createTRPCJotai<AppRouter>({
//   links: [
//     httpLink({
//       url: "http://localhost:3000/api/trpc",
//     }),
//   ],
// })

// // const idAtom = atom()

// export const queryAtom = jotaiClient.users.getUsers.atomWithQuery() //works but not type safe anymore



// // type errors

// // export const usersAtom = atomWithQuery((get: any) => ({
// //   queryKey: ['getUsers'], // This is the key for caching and identifying the query
// //   queryFn: async () => {
// //     // Using the getUsers query procedure from jotaiClient
// //     const data = await jotaiClient.users.getUsers.query();
// //     return data;
// //   },
// // }));

