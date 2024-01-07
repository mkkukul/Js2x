let cards = [7, 4]
cards.push(6)
// console.log("hello")
// console.log(cards)

// Push the newMessage to the messages array, and then log out the array

// let messages = [
    // "Hey, how's it going?",        
    // "I'm great, thank you! How about you?",
    // "All good. Been working on my portfolio lately."
// ]
// 
// let newMessage = "Same here!"
// function(newMessage){
    // newMessage = newMessage + messages[1]
    // console.log(newMessage)
// 
// }
// modifyMessage()
// 
let messages = [
    "Hey, how's it going?" ,
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
];

let newMessage = "Same here!";
messages.push(newMessage); // Yeni mesajı diziye ekliyoruz.

console.log(messages);

// Diziden son öğeyi kaldırmak için:
messages.pop(); 
// Bu, dizinin son öğesini kaldırır.

console.log(messages); 
// Son öğenin kaldırıldığını görmek için diziyi tekrar yazdırıyoruz.
