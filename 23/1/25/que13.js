function timer(duration,onComplete){
    setTimeout(()=>{if(onComplete){console.log(`Timer of ${duration} ms finished`)}},duration);
}
timer(5000,true);