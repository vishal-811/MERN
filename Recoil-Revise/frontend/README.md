## Recoil is a state management library, that  is used to make our app more optimised and performant.

#  We will  create our global state variables by using an atoms and local state variable by using useState().
 
 1.atoms is used to make a global state variables, we will wrap our components inside a RecoilRoot where i am gonna to use a atoms.
  Atoms provide us 3 hooks:
   -useRecoilValue() : This hook is used when we need only state variables value.
   -useRecoilState() : This hook is used when we need both state variables value and setvalue.
   -usesetRecoilState()  :This hook is used when we need to set only the value.

2. We will use a useState() hook when we need a local state variables, this is more faster for local state management, while the atoms are more performant for the global state variables.

3. ### Selector is an atom that is derived from another atoms. This is kind of similar to useMemo(). 
<!-- Important  -->
1.Wrap all the components inside a recoilRoot that use the atoms.
<br/>
2.Make a store folder to write all the atoms this is generally a good practice.
  store(folder) -> atoms(folder) -> atomname.js/ts(file).
 

