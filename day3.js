// // promises/task queue
// console.log("1. start");

// // macro task
// setTimeout(
//     () => {
//         console.log("2. inside setTimeout");
//     },
//     0, // milliseconds delay
// )
// // micro task
// Promise.resolve().then( ()=> console.log("Micro task") )
// queueMicrotask(
//     ()=> {
//         console.log("Queue micro")
//     }
// )
// console.log("3. end");

// Promise/ (Flutter Future)/ Asynchronous

const func1 = () => new Promise(
    (resolve, reject)=> {
        if(true){
            return resolve("Success")
        }else{
            return reject("Failure")
        }
    }
);
// func1().then(
//     (result) => console.log(result)
// ).catch(
//     (err) => console.log(err)
// ).finally(()=> console.log("End"))
// // func1().then().catch().finally()

// async await only used inside a function
// cannot do await func1() in global scope
const runFunc = async () => {
    try{
        const output = await func1();
        console.log(output);
        console.log("End runFunc");
    }catch(err){
        // err is reject
        console.log("Error in func1", err);
    }
}
runFunc();

// Promise Execution
const task1 = () => new Promise((resolve, reject) =>
    setTimeout(
        ()=> resolve("Task 1"), 2000
    )
);
const task2 = () => new Promise((resolve, reject) =>
    setTimeout(
        ()=> resolve("Task 2"), 4000
    )
);
// sequentinally using then
task1()
.then( (result ) => {
    console.log(result);
    return task2();
})
.then( (result) => console.log(result) )
.catch( (err) => console.log(err) )

// sequentially using async await
const runTasks = async () => {
    console.time("runTasks"); // profile time
    const t1 = await task1();
    console.log(t1);
    const t2 = await task2();
    console.log(t2);
    console.timeEnd("runTasks");
    // total time = 6 seconds
}
runTasks();


// parallel execution 
const runTasksParallel = async () => {
    console.time("runTasksParallel");
    const [ r1, r2 ] = await Promise.all(
        [
            task1(), 
            task2()
        ]
    );
    console.log(r1, r2);
    console.timeEnd("runTasksParallel");
    // total time = 4 seconds (max of 2 and 4 seconds)
}
runTasksParallel();
// Promise all with caution, if any promise fails, all will fail

const runTasksParallelSettled = async () => {
    console.time("runTasksParallelSettled");
    const [ r1, r2 ] = await Promise.allSettled(
        [
            task1(), 
            task2()
        ]
    );
    console.log(r1, r2);
    console.log(r1.value); // r1 ko resolve
    console.log(r1.status); // r1 (resolve or reject)
    console.timeEnd("runTasksParallelSettled");
    // total time = 4 seconds (max of 2 and 4 seconds)
}
runTasksParallelSettled();
// one promise exception wont affect other 
