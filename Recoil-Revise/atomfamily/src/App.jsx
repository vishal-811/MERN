 import { RecoilRoot, useRecoilValue } from 'recoil'
import { Todofamily } from './store/atom/atoms'
function App() {
 
  return (
    <RecoilRoot>
         <TodoComponent id={1}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
         <TodoComponent id={1}/>
    </RecoilRoot>
  )
}

 function TodoComponent({id}){
     const currentTodo = useRecoilValue(Todofamily(id));
       return(
        <div>
             <h1>{currentTodo.title}</h1>
             <p>{currentTodo.description}</p>
        </div>
       )
 }

export default App
