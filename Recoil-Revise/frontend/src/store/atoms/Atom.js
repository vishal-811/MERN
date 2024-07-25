
import { atom, selector } from 'recoil'

export const NotificationCountatom =atom({
      key:"notificationcount",
      default:110
})

export const JobsCountatom =atom({
    key:"jobsCount",
    default:32
})

export const messageCountatom =atom({
    key:"messagecount",
    default:11
})

export const NetworkCountatom = atom ({
    key:"networkcount",
    default:56
})

export const TotalCountSelector =selector({
    key:"toatlcountselector",
    get:({get})=>{
        const notificationcount = get(NotificationCountatom);
        const jobcount = get(JobsCountatom);
        const messagecount =get(messageCountatom);
        const networkcount =get(NetworkCountatom);

        return notificationcount+jobcount+messagecount+networkcount;
    }
})