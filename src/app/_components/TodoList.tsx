"use client";
import {  atom, useAtom } from 'jotai'
import { useState } from "react";
import { trpc } from "../_trpc/client";
import { serverClient, UserGetUser } from "../_trpc/serverClient";
import { UsersAtom } from '../_trpc/jotaiClient';

type Users = {
    id: number;
    name: string;
    race: string;
}

export default function TodoList({
    initialUsers
}: {
    initialUsers: Users[] | undefined
}) {

    const [dataJotai,setDataJotai] = useAtom(UsersAtom);

    // console.log('dataJotai',dataJotai)

    const addUser = trpc.users.addUser.useMutation({
        onSettled: () => {
            setDataJotai(UsersAtom);
        }
    });
  
    const [name, setName] = useState<string>("");
    const [race, setRace] = useState<string>("");
    // const getUsers = trpc.users.getUsers.useQuery();
    // const idAtom = atom(getUsers)
    // const [data, refresh] = useAtom(idAtom)
    // const [data, refresh] = useAtom(queryAtom)
    // console.log(data)
    return (
        <div className='w-[70%] mx-auto border-2 border-black'>
            {JSON.stringify(initialUsers)}
            <div>------------Initial users above---------</div>
            {JSON.stringify(dataJotai)}
            <div className="flex flex-col gap-3">
                Name: {" "}
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="border"
                />
                Race:{""}
                <input
                    value={race}
                    onChange={(e) => setRace(e.target.value)}
                    type="text"
                    className="border" />
                <button className="border"
                    onClick={async () => addUser.mutate({ name, race })}
                >Add</button>
            </div>
        </div>
    );
}