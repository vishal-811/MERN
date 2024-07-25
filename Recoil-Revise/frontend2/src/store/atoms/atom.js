import { selector , atom } from "recoil";
import axios  from 'axios';


// export const notification = atom({
//     key:"notification",
//     default:{
//          jobs :0,
//          messaging :0,
//          network:0,
//          notifications:0
//     }
// })

// Asynchronous data queries
   export const notification = atom({
       key:"notificationatom",
       default:selector({
           key:"notificationasyncselector",
           get: async ()=>{
               const res = await axios.get("https://sum-server.100xdevs.com/notifications");
                 return res.data;
           }
       })
   })
export const TotalNotificationSelector= selector({
     key:"totalselector",
     get: ({get}) =>{
          const allnotifications = get(notification);
         return allnotifications.jobs + allnotifications.messaging + allnotifications.network + allnotifications.notifications
     }
})