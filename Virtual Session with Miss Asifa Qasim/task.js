// function synchronousBlockingExample() {
//     console.log("Task 1: Start");
//     for (let i = 0; i < 1e9; i++) {} // Blocking loop
//     console.log("Task 1: End");
//     console.log("Task 2: Start");
//     for (let i = 0; i < 1e9; i++) {} // Another blocking loop
//     console.log("Task 2: End");
// }
//  synchronousBlockingExample();
// BLOCKING CODE
// In synchronous code is blocked, when can never switch to the another code execution until previous demand is retained
// But in Asynchronous operation, some specific function, promises , some reserved keyword allow us to perform large execution programs after whose code result  is instant.
// -------------------------------------//
// function synchronousSequentialExample() {
//     console.log("Step 1");
//     console.log("Step 2");
//     console.log("Step 3");
// }
// synchronousSequentialExample();
// Execution Order
// In synchronous operation, code runs line by line.
// But in asynchronous operation, execution may perform depending on the time standard and importance of task dependency.
// ----------------------------------
function synchronousErrorHandling() {
    try {
        console.log("Task 1: Start");
        if (false)
            throw new Error("An error occurred in Task 1");
        else
            console.log("Task 1: End");
        // This line will not be executed
    }
    catch (error) {
        console.error("Caught error:", error);
    }
}
synchronousErrorHandling();
// Error handling 
// In synchronous error handling is done like above
// ---------------------------------
/*
function synchronousResourceUtilization() {
    console.log("Heavy Task: Start");
    for (let i = 0; i < 1e9; i++) {} // Heavy computation
    console.log("Heavy Task: End");

    console.log("Light Task: Start");
    console.log("Light Task: End");
}

synchronousResourceUtilization();
// In synchronous operation   light and weight task iare weighted to be carried sequentially.
// In asynchronous operation, the opposite happens
*/
// -------------------------------
// function syncOperation(callback: () => void) {
//     console.log("Start synchronous operation");
//     callback(); // Execute the callback immediately
//     console.log("End synchronous operation");
// }
// // Using synchronous operation
// console.log("Before calling syncOperation");
// syncOperation(() => {
//     console.log("Inside synchronous callback");
// });
// console.log("After calling syncOperation");
// function abc(call:()=>void){
//       call();
// }
// function call(ca:()=>void){
//     ca();
//     console.log("call");
// }
// function ca(a:()=>void){
//     a()
//     console.log("ca");
// }
// function a(){
//     console.log("a");
// }
// // Correct usage: passing functions as arguments correctly
// abc(() => call(()=>ca(a)));
// // Call back
// // In this example, the callbackFunction is executed synchronously within the synchronousCallbackExample function. The execution waits for the callback to complete before proceeding to the next line.
