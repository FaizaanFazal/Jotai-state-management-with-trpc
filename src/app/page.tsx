import { createTRPCCaller } from "@/server";
import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";


export default async function Home() {
    const trpcCaller = createTRPCCaller(); // no cache problem , as useQuery was chaching on server
    const getUsers = await serverClient.users.getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <TodoList initialUsers={getUsers}/>
    </main>
  );
}
