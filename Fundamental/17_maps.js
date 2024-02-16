// Map 



const map = new Map()

map.set( "KSA", "Kingdom Of Saudi Arabia")
map.set( "BN", "Bangladesh")
map.set( "KSA", "Kingdom Of Saudi Arabia")


console.log(map);

//note: maps knew for his uniqueness, maps not allows duplicate values. In js type of map is object

for ( let [key, value] of map){
    // console.log(key, " :" , value);
} 

// note: maps hold data in key value pair but key should be any data types.And map also remember the sequence


//note: map syntax  for add element ---> name.set("key", "value")

const fruits = new Map()

fruits.set("name", "mango")
fruits.set("price", 200)

console.log(fruits);

console.log(fruits.get("name"))

// note: .get method use for get value

console.log(fruits.delete("name"))

