// Code your solutions in this file

const messages = [];


function writeCards(names, eventNames) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`);
        
    }

    return messages;
}


function countDown(num){
    let countDown = num;

    while (countDown >= 0){
        console.log(countDown);
        countDown--;
    }
   
}

