
// console.log("hello");
// let c = [1, 2, 3, 4, 5, 6];
// console.log(c);
// let b = c.slice(0, -2);
// console.log(b);

// let c = ["Hi", { detail: [1, 2, 3] }];
// console.log(c[1].detail.slice(1, 3));

// let d = [1, 2, 3, 4, 5];
// console.log(d.slice());

//************************ */
// let b = [
//     { name: "A", age: 22 },
//     { name: "B", age: 23 },
//     { name: "C", age: 24 },
// ];
// let me = b.slice(2);
// let my = { ...me[0] };
// let { name, age } = my;
// console.log(`My name is ${name} and age is ${age}`);
//************************ */

// let details = ["Ali", "Ayesha", { bio: ["work", "home"] }];

// details.map(() => {
//     return (
//         console.log(details)
//     )
// })
//use map mathod ,for in method , slice method and print the values


//************************ */
// let details = ["Ali", "Ayesha", { bio: ["work", "home"] }, [1, 2]];
// // map method
// details.map((a, b) => {
//     if (typeof a == "object" && !a.length) {
//         console.log(a);
//         for (let c in a) {
//             let d = a[c].slice(1);
//             console.log(...d);
//         }
//     }
// }
// );
//************************ */

// let c = [1, 2, 3]
// console.log(...c);

// const myobject = details.slice(2,);
// let ourDtata = { ...myobject };
// // for in loop
// for (const bio in ourDtata) {
//     const element1 = ourDtata[0].bio[0];
//     const element2 = ourDtata[0].bio[1];
//     console.log(element1);
//     console.log(element2);
// }
// // slice
// let sliceItems = details.slice(1, 2);
// console.log(...sliceItems);

//map forin splice method
//*************************** */
// let k = { name: "abid", work: [true, false] }
// for (work in k) {
//     if (work == "work") {
//         let x = k[work].slice(0, 1)
//         console.log(...x);
//     }
// }
//*************************** */


// let myarray = ["abid", "nawaz", "new", "value", "some"];
// myarray.splice(0, 1);
// console.log(myarray);

// var b = ["ali", { name: "ayesha" }, true, false, [1, 2, 3]];
// let c = (b.slice(4));
// console.log(...c);
// console.log(c[2]);


// var b = ["ali", { name: "ayesha" }, true, false, [1, 2, 3]];
// b.splice(0, 5, [1, 2, 3, 4]);
// console.log(...b);


//splice
// var k = [1, 2, 3, 4];
// k.splice(2, 2, 4, 3);
// console.log(k);

// let k = ['A','B','C','D'];


// let k = [["Ali", "Hamza", "Usman"]];
//replace hamza with "Ayesha" using splice without using index

// function there(sup) {
//  console.log(sup)
// }
// there("my value")

// let array = [1, 2, 3];
// function addelementtoarray(a, element) {
//     return [...a, element]

// }
// console.log(array)
// console.log(addelementtoarray(array, 4));

// let funct = ()=>{
//     if( myval = 75){
//     alert("NO")
//     }
// }


// console.log(...myarray)
// for (k in myarray) {
//     (myarray[k].splice(1, 1, "HERE"));
//     console.log(...myarray);
// };

// let b = [["someone", "new", "some"]];
// console.log(...b);

// b.map((a) => {
//     a.map((c, d) => {
//         if (c == "new") {
//             a.splice(d, 1, "CHANGED");
//             console.log(a);
//         }
//     })
// })

// let d = ['A', 'B', 'C'];
// d.map((g, f) => {
//     if (g == 'C') {
//         d.splice(f, 1, 'G');
//        console.log(d);
//     }
// }); 

//..............
// let numbers = [65, 44, 12, 4];
// let newArr = numbers.map(myFunction);

// console.log(newArr)

// function myFunction(num) {
//     return num * 10;
// }

// let myFunction = num => num * 10;

//split
//match 
//replace
//replaceAll


// let mystring = "Hey there Someone, Someone is going to school";
// console.log(mystring.split(' ', 5));
// let b = mystring.match("Some");
// let c =mystring.replaceAll("Someone","Newone")
// console.log(c)

// let mystring = "Ali Ahmed Asad Asfar";
// let d = mystring.split(' ')
// console.log(d)
// document.getElementById("mydemo").innerHTML = d;
// d.map((items) => {
//     return (
//         console.log(items.split(''))
//     )
// })

// document.getElementById("mydemo").innerHTML = d;


// let c = "Ali Usama Subhan, Rehan";
// let result = c.split(' ');
// let d = result.map((items) => `<li>${items}</li>`)
// console.log("===================>", d);

// let data = "Ali Hamza Name Abid";
// let result = data.split(' ');
// let emp = [];
// for (let a = 0; a < result.length; a++) {
//     emp.push(`<li>${result[a]}</li>`)
// }
// console.log(result);

// let myvalue = ["Ali Hamza Iqra", "Ali ,Hamza,Iqra"];
// console.log(myvalue[0])
// let g = myvalue[0].split(' ');
// console.log(g);
// let d = g.join("new")
// console.log(d)

// let g = myvalue.split(' ');
// console.log(g)

// let myvalue = ["Ali Hamza Iqra", "Ali ,Hamza,Iqra"];
// let b = myvalue.map(a => {
//     let c = a.split(' ');
//     c.map((d, g) => {
//         if (a == "Hamza") {
//             c[g] == "Ayesha";
//         }
//     })
// })
// console.log(b)

/*   .........................................*/

//SPLIT

// let a = ["Ali Hamza iqra", "Ali Hamza iqra"]
// let kk = a.map((a, b) => {
//     let f = a.split(' ')
//     f.map((c, d) => {
//         if (c == "Hamza") {
//             f[d] = "Ayesha"
//         }
//     })
//     return (f.join(' '))
// })
// console.log(kk)
/*   .........................................*/


/*   .........................................*/
// let mystring = ["ABID  ALI  HERE", "ABID  ALI  HERE"];

// const newArr = mystring.map((item) => {
//     let b = item.split(' ');
//     b.map((val, ind) => {
//         if (val == "ALI") {
//             b[ind] = "NAWAZ"
//         }
//     })
//     return (b.join(' '));
// })
// console.log(newArr);
/*   .........................................*/


//Map Method here
// let newmapmethod = [10, 20, 40];
// let newone = newmapmethod.map((val, index) => {
//     return `After Substract The New Val is ${val - 1} and index is ${index}`;
// });
// console.log(newone);

//Map Method here


//Find Method Here
// let findval = [10, 100, 40, 50, 60];
// let d = findval.find((val) => {
//     return val > 50;
// });
// console.log(d)
//find Method Here

//findIndex Method Here
// let findval = [10, 100, 40, 50, 60];
// let c = findval.findIndex((val) => {
//     return val > 50;
// })
// console.log(`index ${c}`);
//findIndex Method Here

// let findval = [10, 100, 40, 50, 60];
// let b = findval.filter((elem, ind) => {
//     return ind[0];
// });
// console.log(findval)
//Find Method Here

// let mystring = ["ABID  ALI  HERE", "ABID  ALI  HERE"];

// const newArr = mystring.map((item) => {
//     let b = item.split(' ');
//     b.map((val, ind) => {
//         if (val == "ALI") {
//             b[ind] = "NAWAZ"
//         }
//     })
//     return (b.join(' '));
// })
// console.log(newArr);
// let aString = ["Hello someone there", "Hello someone there"];
// let b = aString.map((item) => {
//     let c = item.split(' ');
//     c.map((d, ind) => {
//         if (d == "someone") {
//             c[ind] = "here"
//         }
//         return (c.join(' '));
//     })
// })
// console.log(b);

// let string2 = "Hey there Bro";
// let mynewString = string2.split(' ');
// let j = mynewString.map((myitems, ind) => {
//     if (myitems == "there") {
//         mynewString[ind] == "HERE";
//     }
// })
// console.log(j);

// let value = "Dog";
// switch (value) {
//     case "Cat":
//         console.log(value)
//         break;
//     case "Dog":
//         console.log(value)
//         break;
//     case "Mouse":
//         console.log(value)
//         break;
//     default:
//         console.log(value)
// }

// let num = 3;
// switch (num) {
//     case 1:
//         console.log(num);
//         break;
//     case 2:
//         console.log(num);
//         break;
//     case 3:
//         console.log(num);
//         break;
//     default:
//         console.log(num);
// }

//zzzzzzzzzzzzzzzzzzzzzzzzzz
// let num = 5;
// switch (num) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("We have 3 values")
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("More then 3 values")
//         break;
//     default:
//         console.log("You either have typed values that are not less then 7 or are Alphabets")
// }

// let num = 1;
// switch (num) {
//     case 1: {
//         let k = num;
//         console.log(k + 1)
//         break;
//     }
//     case 2: {
//         let k = num;
//         console.log(k + 2)
//     }
// }

// let name = { name: "Abid" };
// switch (name.name) {
//     case "Here":
//         console.log(name.name);
//     case "New":
//         console.log(name.name);
//     case "Abid":
//         console.log(name.name);
//     default:
//         console.log("ELSE");
// }

// let arr = [{ name: "Ali" }, { age: 25 }, { job: "BSIT" }];
// let arr = [{ name: "Ali" }, { age: 25 }, { job: "BSIT" }];

// let newarr = { ...arr }
// console.log(newarr);

// console.log(newarr[0])
// switch (newarr.name) {
//     case 1:
//         console.log(newarr.name)
//     case 2:
//         console.log(newarr.name)

//     case 3:
//         console.log(newarr.name)
// }

// function outer() {
//     counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter)
//     }
//     return inner
// }
// let fn = outer()
// fn()
// fn()
// fn()
// fn()

// let anArray = ["Someone"]
// let newArray = anArray.map((item) => {

// })
// console.log(item)



// let test = myarray.filter(item => item.id == 2);
// let test2 = myarray.filter(item => item.id == 2);


// console.log(test);
// console.log(test[0].name);
// let c = test[0].name;
// let d = c.slice(4, 5);
// console.log(d)

// let d = test.slice(2, 4);
// let d = myarray.slice(4, 5);


// let mymethod = [10, 20, 40, 60, 2, 15]
// console.log(mymethod)
// // let mynewarray = myarray.filter(item => item.price < 30);
// // console.log('data', mynewarray);
// let final = mymethod.filter(checkAdult);
// console.log(final)

// let checkAdult = (age) => {
//     return age >= 20;
// }
// console.log(checkAdult)



// let ages = [32, 33, 16, 40];
// console.log(ages)
// let result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(ages.filter(checkAdult));

// let myage = [20, 10, 40, 5, 60, 200];
// console.log(myage);
// let mainResult = myage.filter(removeLowAge);

// function removeLowAge(myage) {
//     return myage >= 60;
// }
// console.log(mainResult);

// let filtering = [5, 4, 10, 50, 15];
// console.log(filtering);
// let newfilter = filtering.filter((item) => item <= 9);
// console.log(newfilter);


let myarray = [
    { name: "test1", color: "red", price: 10, size: 1, id: 1 },
    { name: "test2", color: "green", price: 20, size: 1, id: 2 },
    { name: "test3", color: "blue", price: 30, size: 1, id: 3 },
    { name: "test4", color: "yellow", price: 40, size: 1, id: 4 },
    { name: "test5", color: "orange", price: 50, size: 1, id: 5 },
    { name: "test6", color: "pink", price: 60, size: 1, id: 6 },
];

console.log(myarray);

let arr = [{ name: "Ali" }, { age: 25 }, { job: "BSIT" }];





//...........................................................................................................
const myDetail = {
    "myFullName": "John Denmark",
    "myAge": 22,
    "myEductionaDegree": "BSIT"
}
const { myFullName, myAge, myEductionaDegree } = myDetail
console.log(`my name is ${myFullName}. I am ${myAge} year old and currently completed my ${myEductionaDegree}`)
question # 2
let student = [
    { name: 'John', degree: 'BSCS', age: 22 },
    { name: 'Park', degree: 'BSIT', age: 23 },
    { name: 'Kate', degree: 'MSIT', age: 25 },
    { name: 'Joy', degree: 'MSIT', age: 28 }
];
for (let i = 0; i < student.length; i++) {
    if (student[i].degree === 'MSIT' && student[i].age <= 27) {
        console.log(student[i]);
        break;
    }
}
question # 3
var siblings = [
    { name: "Usama", birth: "1990" },
    { name: "Ali", birth: "1993" },
    { name: "Saad", birth: "1996" },
    { name: "Arif", birth: "1989" },
]
var b = siblings.pop();
siblings.unshift(b)
console.log(siblings)
Question # 4
let persons = { name: "ali", session: "2022-2024", currentstatus: "active" }
var b = { ...persons, session: "2022-2026" }
console.log(b)
Question # 6
let all_data = [{ education: "BSIT" }, "my name is abid", true, [1, 2, 3, 5]]
for (var i = 0; i < all_data.length; i++) {
    if (all_data[i].education) {
        console.log(all_data[i].education)
    }
    else if (typeof (all_data[i]) == "string") {
        console.log(all_data[i])
    }
    else if (typeof (all_data[i]) == "boolean") {
        console.log(all_data[i])
    }
    else {
        console.log(all_data[i])
    }
}
Question # 7
let data_list = [
    ["jhon", 101, 90, 95],
    ["kate", 102, 85, 100],
    ["Narutio", 103, 90, 95],
];
const result = data_list.map((data) => {
    return {
        name: data[0],
        math: data[1],
        eng: data[2],
        arabic: data[3],
    };
});
console.log(result);
part 2
let a = [['john', 101, 90, 95], ['kate', 102, 85, 100], ['naruto', 103, 90, 95]]
let k = []
let g = ['name', 'math', 'eng', 'arabic']
a.map(s => {
    let newobj = {}
    s.map((f, x) => {
        newobj[g[x]] = f // newobj['name']
    })
    k.push(newobj)
})
console.log(k)

//...........................................................................................................

//var has a function scope . it also have global scope


