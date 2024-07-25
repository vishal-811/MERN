## FETCHING DATA FROM A SERVER AND SHOW IT BY USING A RECOIL.

# Inorder to fetch data asynchronously and showing it on the UI , the Asynchronous Data Queries came in to picture.
   ## syntax to write async data queries.
     we know that  the  default value of an atom must be synchronous or selector, we can made this selector to be a async.

     const asyncdataAtom = atom({
         key:"asyncdata"
         default:selector({
             key:"asyncselector"
             get: async()=>{
                const res = await axios.get or do any type of asynchronous work here.
                   return  res;
             }
         })
     }) 