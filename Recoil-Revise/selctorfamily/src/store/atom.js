import { atomFamily, selectorFamily } from "recoil";

export const TodoAtomFamily =atomFamily({
    key:"todoAtomFamily",
    default:selectorFamily({
        key:"todoSelectorfamily",
        get:(id)=>async ({get})=>{
            const res =await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
               const data = await res.json();
               return data.todo;
        }
    })
})