// // Object.assign()

// let obj1={"name":"karthik"}
// let obj2={"city":"hyd"}

// let op=Object.assign(obj1,obj2,{"gender":"male"},{city:"sec"},{"age":21})

// // console.log(op)

// // console.log(obj1)

// // let entries=Object.values(obj1);

// // console.log(entries)

// // let len=Object.values(obj1).length;

// // console.log(len)

// // seal and freeze

// let obj1 = { name: "john", age: "25", city: "hyd" };

// // Object.seal(obj1);

// // obj1["age"]=26;
// delete obj1.age;
// console.log(obj1)

// let k=Object.isSealed(obj1);
// console.log(k)

// if we seal an object:
// we can't add properties into it
// we can update existing properties 
// we can't delete properties from it.


let obj={ name: "john", age: "25", city: "hyd" };

// Object.freeze(obj);

// obj.gender="male";

delete obj.city

let k=Object.isFrozen(obj)

console.log(k)


// if we freeze an object: we can just read them but we can't edit them.
// we can't update existing properties.
// we can't add new properties
// we can't delete existing properties