let myCredits = localStorage.getItem("myCredits");
console.log(myCredits);

// localStorage.setItem() yöntemiyle bir değer saklanıyor ve sonra sayfa yenilendiğinde bu değer localStorage.getItem() ile alınıyor ve konsola yazdırılıyor. Ancak, myCredits değişkeni doğrudan localStorage.getItem("myCredits") çağrısıyla atanmıyor, bu nedenle console.log(myCredits) ifadesi undefined değeri döndürecektir. Doğru şekilde çalışması için doğrudan localStorage'dan alınan değeri myCredits değişkenine atamanız gerekmektedir. İşte düzeltilmiş hali:
// 



// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
// localStorage.setItem("name", "John Doe");
// console.log(localStorage.getItem("name"));
// localStorage.setItem("myCredits", "100")
// console.log(myCredits)
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)
