
/** articles indexes **/
db.getCollection("articles").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** categories indexes **/
db.getCollection("categories").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** articles records **/
db.getCollection("articles").insert({
  "_id": ObjectId("53ef2d43abe84f5814b386d6"),
  "__v": NumberInt(0)
});
db.getCollection("articles").insert({
  "_id": ObjectId("53ef2e9aad2441280b997483"),
  "__v": NumberInt(0)
});
db.getCollection("articles").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("5391972701dd4ad41c000001"),
  "body": "Git är i grunden command line-baserat, dvs. man skriver olika textkommandon för att använda sig av Git. En mycket bra tutorial om du vill lära dig Gits textkommandon är:Git Immersion – Brought to you by Neo. På sikt är det väldigt bra att behärska Gits textkommandon. Det ger en bättre förståelse för Git och därmed större möjlighet att lösa problem som kan uppkomma i versionshanteringen. Den grafiska klient vi installerar nedan (SmartGit) tar normalt hand installationen av Git-protokollet i sig på din dator, men skulle den inte göra det kan du följa instruktionerna på Git Immersion kring hur du installerar Git. På Mac- och Linux-datorer kan du skriva Git-kommandon direkt i den vanliga terminalen (när du är i en mapp som versionskontrolleras av Git). På Windows-datorer behöver du en speciell terminal. Använder du ett program som SmartGit (se nedan) kan du nå denna terminal från programmet Tools -> Open Git-shell.",
  "categoryId": "5396ff5e01dd4ae810000003",
  "date": "march 2014",
  "smallbody": "Git är i grunden command line-baserat, dvs. man skriver olika textkommandon för att använda sig av Git. En mycket bra tutorial om du vill lära dig Gits textkommandon är:Git Immersion – Brought to you by Neo.",
  "title": "Local storage",
  "userId": "53e4963c7b56ff9018f19ef2"
});
db.getCollection("articles").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("53abe53401dd4adc10000001"),
  "body": "When making the calls, we need to remember that the first parameter contains the actual data. These data will be used as the parameters of the API. This can be appended like query strings or POSTed. The API will use these data to filter the response. Where as the second parameter overrides the default parameters for the resource definition. It is used by Angular to decide how to make the REST call. In our case, we used – “\/api\/booking\/:Id” as our api entry point and then defined default parameters as – {Id: “@Id” }. So here, the second parameter will help angular decide which URL (by providing the value for Id) to make the request to. We didn’t need to pass any data but we did need to pass the ID in some methods. This is why most of the methods were passed an empty object as the first parameter.",
  "category": "REST",
  "categoryId": "5396ff4201dd4ae810000002",
  "date": "maj 2014",
  "smallbody": "When making the calls, we need to remember that the first parameter contains the actual data. These data will be used as the parameters of the API. This can be appended like query strings or POSTed. The API will use these data to filter the response.",
  "title": "REST",
  "userId": "53e493eaedbea4000f8035da"
});
db.getCollection("articles").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("53abe51c01dd4adc10000000"),
  "body": "Angular.js är ett MVC-ramverk. Dess anhängare gör också anspråk på att i stort sett kunna ersätta en mängd andra bibliotek (t.ex. jQuery), vilket tills viss del stämmer.AngularJS — Superheroic JavaScript MVW Framework.Det som kan kännas lite skrämmande när man lär sig angular.js (och kommer från ”vanilla” HTML\/CSS\/JS\/jQuery) är att det både är flera nya koncept (MVC, routers, filters, promises etc) och en ny syntax ($.scope, $.http etc) som man behöver bemästra.Veckan som Benjamin hade med gick igenom ganska mycket kring flera ganska avancerade koncept i angular.js, därefter har många av er valt att lära er mer genom att inkludera och basera era grupparbeten på angular.js. Vilket är fantastiskt att se!Men det finns också dem som är lite lätt förvirrade av angular.js forfarande (jag kan räkna in mig själv här ibland). I grunden är dock MVC ingen magi – vilket våra inledande exempel denna vecka när jag på två timmar byggde en liten grund för en MVC-motor visar. Ingen magi och ingen rocket science, så ge det tid och du kna lära dig!",
  "category": "JavaScript",
  "categoryId": "5396ff2e01dd4ae810000001",
  "date": "aprel 2014",
  "smallbody": "Angular.js är ett MVC-ramverk. Dess anhängare gör också anspråk på att i stort sett kunna ersätta en mängd andra bibliotek (t.ex. jQuery), vilket tills viss del stämmer.AngularJS — Superheroic JavaScript MVW Framework.",
  "title": "Angular.js revisited",
  "userId": "53e493eaedbea4000f8035da"
});

/** categories records **/
db.getCollection("categories").insert({
  "_id": ObjectId("5396ff2e01dd4ae810000001"),
  "name": "JavaScript"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5396ff4201dd4ae810000002"),
  "name": "REST"
});
db.getCollection("categories").insert({
  "_id": ObjectId("5396ff5e01dd4ae810000003"),
  "name": "Local Storage"
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "wages_database.employees"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "wages_database.departments"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "wages_database.articles"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "wages_database.categories"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "wages_database.roles"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "wages_database.users"
});

/** users records **/
db.getCollection("users").insert({
  "password": "$2a$08$Ln4v7c6idGSDZ7hyb3qVZ.AYonqQvZqZ5Kh\/x1fPlTNkDOrmHZe7m",
  "email": "klm@mail.ru",
  "_id": ObjectId("53e493eaedbea4000f8035da"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$Et\/xQSzmBGGiZvw2O6itveUkfdsDUKg6QsmUGLWQEkFYkx19Pw1C.",
  "email": "aaa@mail.ru",
  "_id": ObjectId("53e4963c7b56ff9018f19ef2"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$VLW001E0Sv3EtrjzDHd9veUjTTsLFqCzLGOpzQYzTmmRQUYDG4lQi",
  "email": "ggg@mail.ru",
  "_id": ObjectId("53e65d0488f02b9416e52182"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$6BMBM3XYn2eMvyheK\/SxBuf6twiCE9KszRoWuDX.EpnMedBADgV1a",
  "email": "hhh@mail.ru",
  "_id": ObjectId("53e87fdaca8a6ec806a0f712"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$hAEqWhCi4mHlv9CRsI9lLOXo1GeSgFL1bZa7xXLFNIGVgeePprIdy",
  "email": "www@mail.ru",
  "_id": ObjectId("53e87ff7ca8a6ec806a0f713"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$QaxMwsDYvpgYssOEMTaQfO8XAZ\/ZNf7Wx5.6aT7xFkt77OYfBMJES",
  "email": "qqq@mail.ru",
  "_id": ObjectId("53e9d44516dc7a1c07483416"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$aMGTxvW6VprTMoxMGwwLceVhqL\/xNs7gzqAcUX7s4.uAY5S.32M1G",
  "email": "fff",
  "_id": ObjectId("53e9d45e16dc7a1c07483417"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "password": "$2a$08$tRB3.JxeVBqumDIrZqWZ5uRK6d21Ew3ZMEQFcYf8XMU3KVMOkxBwK",
  "email": "vvv@mail.ru",
  "_id": ObjectId("53eb2eff33067bdc04092a1d"),
  "__v": NumberInt(0)
});
