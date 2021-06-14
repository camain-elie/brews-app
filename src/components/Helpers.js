export function howLongAgo(date){
    const nowDate = Date.parse(new Date());
    const thenDate = Date.parse(date);
    let duration = Math.round((nowDate-thenDate)/1000/3600/24);
    
    if(duration <= 1){
        return (duration === 1) ? "Yesterday" : "Today";
    }

    if(duration < 7){
        return (duration + " days ago");
    }
    
    if(duration <= 364){
        return (Math.round(duration/30.4) + " month" + ((duration<46) ? "" : "s") + " ago");
    } else {
        return (Math.round(duration/365.25) + " year" + ((duration<548) ? "" : "s") + " ago")
    }
}