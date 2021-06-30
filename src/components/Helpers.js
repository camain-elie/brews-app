export function howLongAgo(date){
    const nowDate = Date.parse(new Date());
    const thenDate = Date.parse(date);
    let duration = Math.round((nowDate-thenDate)/1000/3600/24);
    const isPast = duration > 0;
    duration = Math.abs(duration);

    if(!(date instanceof Date)){
        return "Invalid date";
    }
    
    if(duration <= 1){
        return (duration === 1) ? (isPast ? "Yesterday" : "Tomorrow") : "Today";
    }

    if(duration < 7){
        return ((isPast ? "" : "in ") + duration + " days" + (isPast ? " ago" : ""));
    }

    if(duration < 30){
        return ((isPast ? "" : "in ") + Math.round(duration/7) + ` week${duration/7>1 ? 's' : ''}` + (isPast ? " ago" : ""))
    }
    
    if(duration <= 364){
        return ((isPast ? "" : "in ") + Math.round(duration/30.4) + " month" + ((duration<46) ? "" : "s") + (isPast ? " ago" : ""));
    } else {
        return ((isPast ? "" : "in ") + Math.round(duration/365.25) + " year" + ((duration<548) ? "" : "s") + (isPast ? " ago" : ""))
    }
}