// Map 



const map = new Map()

map.set( "KSA", "Kingdom Of Saudi Arabia")
map.set( "BN", "Bangladesh")
map.set( "KSA", "Kingdom Of Saudi Arabia")


console.log(map);

//note: maps knew for his uniqueness, maps not allows duplicate values. In js type of map is object

for ( let [key, value] of map){
    console.log(key, " :" , value);
} 