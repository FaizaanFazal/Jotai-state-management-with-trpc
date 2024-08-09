import { createTRPCCaller } from "@/server";
import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";
import { useAtom } from "jotai";
import { trpc } from "./_trpc/client";
import { atom } from "jotai";
import { UsersAtom } from "./_trpc/jotaiClient";
// import { queryAtom } from "./_trpc/jotaiClient";


export default async function Home() {
   // const trpcCaller = createTRPCCaller(); // no cache problem , as useQuery was chaching on server
    // const getUsers = await serverClient.users.getUsers(); still  gets cached
    // const [dataJotai] = useAtom(queryAtom);
    
    const [data, refresh] = useAtom(UsersAtom)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <TodoList initialUsers={data.data}/>
    </main>
  );
}
