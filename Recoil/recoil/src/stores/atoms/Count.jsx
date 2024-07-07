import { atom, selector } from "recoil";



export const CountAtom = atom({
    key:'countatom',
    default:0
});


// Creating a selector

export const EvenSelector = selector({
    key:"evenselector",
    get:({get})=>{
        const  count = get(CountAtom);
        return count%2;
    }
})