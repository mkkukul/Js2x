function generateSentence(desc, arr) {
    // Base string'i oluştur. Açıklama ve dizi uzunluğunu içerir.
    let baseString = `The ${arr.length} ${desc} are`;
    
    // Dizideki her öğe için döngü oluştur
    for (let i = 0; i < arr.length; i++) {
        // Base string'e her öğeyi ekleyin ve virgülle ayırın
        baseString += arr[i] + ",";
    }
    
    // Son olarak oluşturulan cümleyi döndürün
    return baseString;
}

// Fonksiyonu kullanarak bir cümle oluşturun ve bu cümleyi bir değişkende saklayın
const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);

// Oluşturulan cümleyi konsola yazdırın
console.log(sentence);



// function generateSentence(desc, arr) {
    // // let baseString = `The ${arr.length} ${desc}are`
    // for (let i= 0; i<arr.length; i++) {
        // baseString +=arr[i]+ ","
    // }
    // return baseString
// }
// // const sentence = generateSentence("highest mountains", ["Mount Everst", "K2"])
// console.log(sentence);