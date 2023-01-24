// Create a function using map that returns an array like object of all the arguments passed to it.

let data = [
    {id: 1, country: 'Germany', population: 83623528},
    {id: 2, country: 'Austria', population: 8975552},
    {id: 3, country: 'Switzerland', population: 8616571}
];
  
let dict = Object.assign({}, ...data.map((x) => ({[x.id]: x.country})));
console.log(dict);

