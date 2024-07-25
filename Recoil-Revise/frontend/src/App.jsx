import { RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'
import { JobsCountatom, messageCountatom, NetworkCountatom, NotificationCountatom } from './store/atoms/Atom';


function App() {
     return(
        <RecoilRoot>
           <MainApp/>
        </RecoilRoot>
     )
}

function MainApp(){
  const NetworkCount = useRecoilValue(NetworkCountatom);
  const jobsCount = useRecoilValue(JobsCountatom);
  // const messagecount = useRecoilValue(messageCountatom);
  const notificationcount = useRecoilValue(NotificationCountatom);
    const [messagecount , setMessageCount] =useRecoilState(messageCountatom);
  return (          
    <>
       <button>Home</button>
       <button>My network {NetworkCount}</button>
       <button>Jobs {jobsCount}</button>
       <button>message {messagecount}</button>
       <button>notification {notificationcount>100?'99+':{notificationcount}}</button>
       <button>me</button>
       <br/>
       <br/>
       <button onClick={()=>{
          setMessageCount((c)=>c+1);
       }}>Add new message</button>
    </>
  )
}
''
export default App
