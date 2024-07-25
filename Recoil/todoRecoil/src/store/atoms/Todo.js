 
import { atom } from 'recoil';

export const titleAtom = atom({
  key: 'titleAtom',
  default: '',
});

export const descriptionAtom = atom({
  key: 'descriptionAtom',
  default: '',
});

export const todosAtom = atom({
  key: 'todosAtom',
  default: [],
});
