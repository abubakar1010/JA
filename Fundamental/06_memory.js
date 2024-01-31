
// ____________________________________Memory_______________________________________


// note: stack memory and heap memory

// note: All primitive type count on stack memory and all reference data count on heap memory

let score = 99

let newScore = score

newScore = 101

// console.log(score);
// console.log(newScore);

let value = [ 6, 8, 10]

let newValue = value

newValue[2] = 15

// console.log(value);
// console.log(newValue);

// i-q: in stack memory-- if we assign a existing value in variable, then provided a copy of this existing value not this value

//t-i-q: in heap memory-- if we assign a existing value in variable, then provided a reference of this existing value not copy. because this reason if we have change in new value it makes change previous value