import { useRecoilValue , RecoilRoot , useRecoilState } from "recoil";
import { notification, TotalNotificationSelector } from "./store/atoms/atom";
// import { useEffect } from "react";
// import axios  from 'axios';

function App() {
 
  return (
    <RecoilRoot>
        <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
      // const [notificationcount , setNotificationCount] =useRecoilState(notification);
        const notificationcount = useRecoilValue(notification);
       const totalCountValSelector =useRecoilValue(TotalNotificationSelector);

          // useEffect(()=>{
          //   const response =  axios.get("https://sum-server.100xdevs.com/notifications")
          //                      .then((response)=>{
          //                       setNotificationCount(response.data);
          //                      })
  
          //    },[])
        
     return(
      <>
       <button>Home</button>
       <button>My network {notificationcount.network}</button>
       <button>Jobs {notificationcount.jobs}</button>
       <button>message {notificationcount.messaging}</button>
       <button>notification {notificationcount.notifications>100?'99+':notificationcount.notifications}</button>
       <button>me</button>
       <button>TotalCount {totalCountValSelector}</button>
      
      </>
     )
}

export default App
