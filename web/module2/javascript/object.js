// empty Object

let obj={};
console.log(obj);

let obj1={
    "name":"sandeep",
    "age":21,
    "mob. no.":8860503744,
    lastName: "kuamr"
};

// console.log(obj1);

// store multiple type element in objects
let capAmerica={
    name:"Steve",
    "age":42,
    "friends":['natasha','thor','tony','hulk'],
    address:{
        city:'queens',
        state:"harayana"
    },
    sayHi: function (){
        console.log("cap America say Hi and Hello....")
    }
};

// console.log(capAmerica);

// access particular element of Object
// console.log(capAmerica.name);
// console.log(capAmerica.friends)   


// console.log(capAmerica.sayHi()); // gives error "undefined"

// so remove console.log()

capAmerica.sayHi();

// add new key to Object or edit key value
capAmerica.movies=['Avengers','EndGame'];
// console.log(capAmerica);

// delete Element
delete capAmerica.movies;
// console.log(capAmerica);



// second method to accesss key Object
// in Dot (.) method after . key is considered as string but in 2nd method not


// console.log(capAmerica[name])
console.log(capAmerica['name']);