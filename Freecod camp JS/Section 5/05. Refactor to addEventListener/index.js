// saveLead() fonksiyonu tanımlanır
function saveLead() {
    // "Button clicked from onclick attribute!" metni konsola yazdırılır
    console.log("Button clicked from onclick attribute!");
}

// inputBtn değişkeni, DOM'da "input-btn" id'sine sahip bir öğeyi alır
let inputBtn = document.getElementById("input-btn");

// inputBtn öğesi üzerinde 'click' olayını dinleyen bir olay dinleyici eklenir
inputBtn.addEventListener('click', function() {
    // "Button cliked from addEventListener" metni konsola yazdırılır
    console.log("Button clicked from addEventListener");
});

İlk olarak, bir HTML düğmesine tıklama işlemini işlemek için bir saveLead() adlı bir işlev tanımlanır. Daha sonra, bu işlev, bir butona onclick özniteliği ile bağlanabilir.

İkinci olarak, aynı HTML düğmesine tıklama işlemini ele almak için addEventListener() yöntemi kullanılır. Bu yöntem, belirtilen bir olay dinleyiciyi (burada bir anonim işlev) belirtilen bir olay türüne (burada 'click') ekler. Bu yöntem, daha dinamik bir etkileşim sağlar ve genellikle tercih edilen bir yöntemdir.


// function saveLead() {
//     console.log("Button clicked from onclick attribute!")
// }

// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener('click', function() {
//     console.log("Button cliked from addEventListener")
// })
