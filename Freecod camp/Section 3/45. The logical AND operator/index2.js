// İlk olarak, hasCompletedCourse adında bir değişken oluşturulur ve bu değişken false değerine sahiptir.
let hasCompletedCourse = false;

// givesCertificate adında bir başka değişken oluşturulur ve bu değişken true değerine sahiptir.
let givesCertificate = true;

// Eğer hasCompletedCourse değişkeni true ise, içerideki kod bloğuna girilir.
if (hasCompletedCourse === true) {
    // Eğer givesCertificate değişkeni de true ise, generateCertificate() fonksiyonu çağrılır.
    if (givesCertificate === true) {
        generateCertificate();
    }
}

// generateCertificate adında bir fonksiyon tanımlanır. Bu fonksiyon, "Generating certificate...." mesajını konsola yazdırır.
function generateCertificate() {
    console.log("Generating certificate....");
}
