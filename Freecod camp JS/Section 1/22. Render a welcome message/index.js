// //! Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// //! Create two variables (name & greeting) that contains your name
// //! and the greeting we want to render on the page

// //! Render the welcome message using welcomeEl.innerText
// let name = "Per Harald Borgen"
// let greeting = "Welcome Back "

// welcomeEl.innerText = greeting + name
// HTML içindeki bir paragraf öğesine erişir ve welcomeEl değişkenine atar
let welcomeEl = document.getElementById("welcome-el");

// İsim bilgisini içeren bir dize oluşturur ve name değişkenine atar
let name = "Per Harald Borgen";

// Karşılama mesajını içeren bir dize oluşturur ve greeting değişkenine atar
let greeting = "Welcome Back ";

// HTML paragraf öğesinin metin içeriğini, karşılama mesajı ve isimle birleştirerek günceller
welcomeEl.innerText = greeting + name;
