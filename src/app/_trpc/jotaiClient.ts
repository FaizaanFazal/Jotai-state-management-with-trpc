// import { atom } from 'jotai'
import { createTRPCJotai } from 'jotai-trpc'
import { httpLink } from '@trpc/client';
import { AppRouter } from '@/server';

const jotaiClient = createTRPCJotai<AppRouter>({
  links: [
    httpLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
})

// const idAtom = atom()
// export const queryAtom = jotaiClient.users.getUsers.atomWithQuery()