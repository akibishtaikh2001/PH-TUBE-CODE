// const isverified = "";

// // if(isverified === true){
// //     console.log('user is verified');
// // }
// // else{
// //      console.log('user is not verified');
// // }
// console.log(`${isverified === true ? 'user is verified' : 'user is not verified'}`);


function getTimeString(time) {
    // get Hour and rest seconds
    const hour = parseInt(time / 3600);
    let remaningSecond = time % 3600;
    const minute = parseInt(remaningSecond / 60);
    remaningSecond = remaningSecond % 60;
    return `${hour} hour ${minute} minute ${remaningSecond} second ago`
}

console.log(getTimeString(7865));
