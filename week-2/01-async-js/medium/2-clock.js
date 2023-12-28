// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let date=new Date();
let hour=date.getHours();
let minutes=date.getMinutes();
let seconds=0;


function update(){
    seconds++;
    if(seconds===60){
        minutes+=1;
        seconds=0;
    }
    if(minutes===60){
        hour+=1;
        minutes=0;
    }
    if(hour>=12){
        console.log(hour+":"+minutes+":"+seconds+"pm");
    }
    else{
        console.log(hour+":"+minutes+":"+seconds+"am");
    }
    if(hour===24){
        hour=0;
        minutes=0;
        seconds=0;
    }
}

setInterval(update,1000);

