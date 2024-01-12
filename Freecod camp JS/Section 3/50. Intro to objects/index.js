// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.tags)
console.log( course["tags"] )
// !console.log(course.tags) ifadesinde, course objesinin tags özelliğine doğrudan erişim sağlanmıştır.

//?console.log(course["tags"]) ifadesinde ise köşeli parantez notasyonu kullanılarak course objesinin "tags" özelliğine erişim sağlanmıştır.

