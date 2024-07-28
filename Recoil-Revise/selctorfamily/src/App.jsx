import { RecoilRoot, useRecoilValueLoadable } from 'recoil'
import { TodoAtomFamily } from './store/atom'
function App() {

  return (
    <RecoilRoot>
         <TodoComponent id={1}/>
         <TodoComponent id={2}/>
         <TodoComponent id={3}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
         <TodoComponent id={2}/>
    </RecoilRoot>
  )
}

function TodoComponent({id}){
     const currTodo = useRecoilValueLoadable(TodoAtomFamily(id));
        if(currTodo.state === 'loading'){
            return(
              <div>Loading.....</div>
            )
        }
        else if(currTodo.state === 'hasValue'){
          return(
            <div>
                 <h1>{currTodo.contents.title}</h1>
                 <p> {currTodo.contents.description}</p>
            </div>
          )
        }
        else if(currTodo.state === 'hasError'){
            return(
              <div>Something went wrong!</div>
            )
        }
}
export default App
