import { initTRPC } from "@trpc/server";
// import { experimental_nextAppDirCaller } from '@trpc/server/adapters/next-app-dir';

const trpc = initTRPC.create();
export const router = trpc.router;
export const publicProcedure = trpc.procedure;
interface Meta {
    span: string;
}


// export const t = initTRPC.meta<Meta>().create();
// const serverActionProcedure = t.procedure.experimental_caller(
//     experimental_nextAppDirCaller({
//         pathExtractor: ({ meta }) => (meta as Meta)?.span,
//     }),
// ).use(async (opts) => {
//     const user = "Faizaan"; //dummy value
//     return opts.next({ ctx: { user } });
// });

// export const protectedAction = serverActionProcedure.use((opts) => {
//     if (!opts.ctx.user) {
//         throw new TRPCError({
//             code: 'UNAUTHORIZED',
//         });
//     }
//     return opts.next({
//         ctx: {
//             ...opts.ctx,
//             user: opts.ctx.user, // <-- ensures type is non-nullable
//     },
//     });
//   });