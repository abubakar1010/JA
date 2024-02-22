const arr = [ 4, 5, 2, 9];

console.log(arr);

// console.log(Math.max(...arr));
// console.log(...arr);

const nums = arr

console.log(nums);

nums.push(4)

//if we change on main array it also make change on main array

console.log(nums);
console.log(arr)   

//we use use spread operator avoid this referencing issue

const spreadOnarr = [...arr]

console.log(spreadOnarr);

spreadOnarr.pop()

console.log(spreadOnarr);
console.log(arr);