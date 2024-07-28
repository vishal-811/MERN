
import { atomFamily } from "recoil";
import {Todos} from '../../Todo';

export const Todofamily = atomFamily({
    key:"todofamilyatom",
    default:(id)=>{
        return Todos.find((x)=> x.id === id);
    }
})