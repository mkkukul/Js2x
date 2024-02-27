
// Kişi nesnesini oluşturun ve üç anahtar içersin: name, age ve country.
// Kendinizi örnek olarak kullanarak, name, age ve country için değerleri ayarlayın.
let person = { 
    name: "Per", // İsim
    age: 35, // Yaş
    country: "Norway" // Ülke
};

// logData() adında bir fonksiyon oluşturun.
// Bu fonksiyon, person nesnesini kullanarak aşağıdaki formatta bir dize oluşturur: 
// "Per 35 yaşında ve Norway'de yaşıyor"
function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

// logData() fonksiyonunu çağırarak, işlevin doğru çalışıp çalışmadığını kontrol edin
logData(); // Konsola "Per is 35 years old and lives in Norway" yazdırır


// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = { 
    name: "Per",
    age: 35,
    country: "Norway"
};

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData(); // Konsola "Per is 35 years old and lives in Norway" yazdırır



// let person = { 
    // name: "Per",
    // age: 35,
    // country: "Norway"
// }
// function logData() {
    //  console.log(person.name +" is "+ person.age + " years old and lives in "+ person.country)
// }
// logData();