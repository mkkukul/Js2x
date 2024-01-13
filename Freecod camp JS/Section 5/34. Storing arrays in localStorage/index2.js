// 1. `myLeads` adında bir değişken oluşturuluyor ve bu değişkene bir JSON formatında bir dize atanıyor.
let myLeads = `["www.awesomelead.com"]`;

// 2. JSON.parse() kullanarak, myLeads dizesini bir JavaScript dizisine dönüştürülüyor.
myLeads = JSON.parse(myLeads); // Şu anda myLeads = ["www.awesomelead.com"]

// 3. myLeads dizisine push() metodu ile "www.epiclead.com" adında yeni bir URL ekleniyor.
myLeads.push("www.epiclead.com"); // Şu anda myLeads = ["www.awesomelead.com", "www.epiclead.com"]

// 4. myLeads dizisi tekrar bir JSON formatında dizeye dönüştürülüyor.
myLeads = JSON.stringify(myLeads);

// 5. myLeads değişkeninin türünü kontrol ediyor ve sonucu konsola yazdırıyor.
console.log(typeof myLeads); // Bu, myLeads'in bir string türünde olduğunu gösterir.
