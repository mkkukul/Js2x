// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchase() {
    console.log("button clicked");
    errorParagraph.textContent = "Something went wrong, please try again";
}

// let errorParagraph = document.getElementById("error");: HTML belgesindeki "error" id'ye sahip paragraf elementini seçer ve bu elementi errorParagraph değişkenine atar.
//  console.log(errorParagraph);: Seçilen paragraf elementini konsola yazdırır. Bu, seçimin doğru olup olmadığını kontrol etmek için kullanılabilir.
//  function purchase() { ... }: purchase adında bir fonksiyon tanımlar. Bu fonksiyon, bir düğmeye tıklandığında çalıştırılacak olan işlevi içerir.
//  console.log("button clicked");: Düğmeye tıklama olayının gerçekleştiğini belirtmek için konsola "button clicked" mesajını yazdırır.
//  errorParagraph.textContent = "Something went wrong, please try again";: errorParagraph adlı paragraf elementinin metin içeriğini değiştirir. Böylece, bir hata durumunda kullanıcıya uygun bir mesaj görüntülenir.
// 

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)
// function purchase(){
    // console.log("button clicked")
     // errorParagraph.textContent = "Something went wrong, please try again"
// }
// 