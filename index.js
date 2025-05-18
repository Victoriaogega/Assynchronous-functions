
// question 1
// You are building a reminder feature for a task management app. Write an async function that sends a reminder (simulated with console.log) after a delay using setTimeout. The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!", and you should await it to log the message.

const { promises } = require("graceful-fs");

const taskManagement = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Sending reminder to user");
        
        resolve('Reminder sent to user!')
    },3000)
})

const sendMessage = async()=>{
    try{
const send = await taskManagement;
console.log({send})
    }catch(error){
        console.log({error});
        
    }
}
sendMessage()

// Question2
// In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.

async function checkServer() {
    return new Promise((resolve, reject) => {
        const isRunning = Math.random() > 0.2;
        setTimeout(()=> {
            if (isRunning){
                resolve("Server is running");
            }else{
                reject("Server is down")
            }
        },2000)
    });
}
let intervalid;
let elapsedTime = 0;
intervalid = setInterval (()=> {
elapsedTime +=5;
console.log("Checking server status");

checkServer()
.then(message => {
    console.log(`Server status: ${message}`);
})
.catch(error => {
    console.error(`Server status: ${error}`);
});
if(elapsedTime >= 30){
    console.log("30 seconds elapsed. Stopping server status checks.");
    clearInterval(intervalid);   
}
},5000);
checkServer()

//  Question3
// You're building a system to show multiple notifications to a user. Create an async function showNotifications that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a Promise. After all messages are shown, log "All notifications sent".

async function showNotifications(messages) {
    for (let message of messages){
        await showMessage(message)
    }
    console.log("All messages sent.");
    
}

function showMessage(message){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(message);
            resolve()
            
        },1000) 
    })
     console.log("All notifications sent.");
}
const messages = ['Welcome to our website','Please tap on the link to register','You have successfully created your account']
showNotifications(messages)





// Question4
// In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.

// async function fetchDataWithRetry() {
//     return new Promise((resolve, reject) => { 
//         setTimeout(()=> {
//             let fetchData = 3
//           if(fetchData<=3){ resolve("Data fetched")}else {  reject("Failed after 3 attempts.")}  
//           fetchData++
//         },2000)
//     })
// }


async function fetchDataWithRetry() {
     let fetchDataAttempts = 3
     function mockApiCall(){
        return Promise.reject("Api call failed")
     }
     function delay(ms){
        return new Promise(resolve => setTimeout(resolve,ms))
     }
        for(let attempt = 1; attempt<= fetchDataAttempts;attempt ++){
            try{await mockApiCall();
                return "Data fetched"
            }catch(error){
                if(attempt< fetchDataAttempts){
                    await delay(2000);
                } else{console.log("Failed after 3 attempts.");
            }
        }
     }
    }

fetchDataWithRetry().then(console.log);



// Question5
// You’re building a countdown timer for a product launch. Write a function that takes a number n and logs the countdown every second using setInterval. Once it reaches 0, stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.

function countdown(n){
    const intervalid = setInterval(()=> {
        console.log(n);
        n--
        if (n= 0){
            clearInterval(intervalid);
            launchProduct().then(message => console.log(message));
        }
    },1000)
}
async function launchProduct() {
    return promise.resolve("Product launched")
}

console.log(countdown(5));






