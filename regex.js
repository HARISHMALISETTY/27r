// let pattern=/hello/i;

// literal notations


// let pattern1=new RegExp("hello","i") // using a constructor

// let ip="Hello";

// let op=pattern1.test(ip)
// console.log(op);

// let pattern=/c.t/; matches any single character

// let ip="crt";

// let op=pattern.test(ip);

// console.log(op);

// let pattern=/^hello/i; //matches start of the string

// let ip="Hello world";

// let op=pattern.test(ip);

// console.log(op)


// let pattern=/thing$/; //matches end of the string
// let ip="something";

// let op=pattern.test(ip);

// console.log(op)


// let pattern=/cat|dog/; // matches cat or dog here.

// let ip="cat";

// let op=pattern.test(ip);

// console.log(op)


// let pattern=/colou?r/;

// let ip="colour";

// let op=pattern.test(ip);

// console.log(op)



// let pattern=/[abc]/i; // should match with a or b or c atleast

// let ip="xyz";

// let op=pattern.test(ip)
// console.log(op)


// let pattern=/^\w{5,10}$/ //should contains any alphabetes.

// let ip="123455";

// let op=pattern.test(ip);

// console.log(op)



// let pattern=/^[a-zA-Z][a-zA-Z0-9._]{4,14}$/;

// let ip="H2gh3";

// let op=pattern.test(ip)

// console.log(op);



let pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let ip="Harish1234@$";

let op=pattern.test(ip);
console.log(op);
