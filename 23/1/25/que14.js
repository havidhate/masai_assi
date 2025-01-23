function task(id,fun){
    setTimeout(()=>{
        console.log("Task"+id);
        if(fun){
            fun();
        }
    },5000);
}

task(1,()=>{
    task(2,()=>{
        task(3,()=>{
            task(4,()=>{
                console.log("All tasks completed");
            })
        })
    })
})