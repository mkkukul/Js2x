// Mümkünse, const kullanın. Değilse, let kullanın.

// Müşteri bazı ürünler sipariş etmek istiyor. İşte detaylar:
const basePrice = 520;
const discount = 120;
const shippingCost = 15; // let'ten const'a değiştirildi
let shippingTime = "5-12 gün";

// Hopala! Görünüşe göre nakliye biraz daha karmaşık olacak
// shippingCost = 15; // Artık gerekli değil
shippingTime = "7-14 gün"; // shippingTime değişebilir durumda kaldı

// Tam fiyatı hesaplama
const fullPrice = basePrice - discount + shippingCost; // let'ten const'a değiştirildi

// Son olarak, müşteriye bildirme
console.log("Toplam maliyet: " + fullPrice + ". Teslimat " + shippingTime + " içinde gerçekleşecek.");



//  If possible, use const. If not, use let.

//  Which variables below should be changed from let to const?

//  The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

//  Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

//  Calculating the full price
// let fullPrice = basePrice - discount + shippingCost

//  Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
