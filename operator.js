//t a=10;
//console.log(10!=10);
//console.log(10 >11 && 10 < 5);

//let a = 20;
//let b= 30;
//let day = prompt("enter the number");
//if(day <= 20){
//console.log("This Number is smaller than b");
//}

//if(day >=20 ){
    //console.log("this number is greater than a ")
//}
//function isPalidrome(str)
//{
    //let revStr = "";
    //for(let i = str.length-1;i>=0;i--){
        //revStr += str[i];
    //}
    //if(str == revStr){
        //console.log("Palindrome");
    //}else{
        //console.log("Not a Palindrome");
    //}
//}
//isPalidrome("sir")
//isPalidrome("madam")
//isPalidrome("malayalam")
//function(){
    //console.log("function expression");
//}
//let x = (a) =>{console.log(a);}
//git remote addx(10);
//function x() {
    //let a = 10;
    //const b =20;
    //console.log(a , b);
    //function y() {
        //let p="JS";
        //var q = "Reactjs";
        //console.log(p , q);
        //function z(){
            //const username = "ashish";
            //console.log(username);
            //console.log(a);
            //console.log(q);
        //}
        //();
    //}
    //y();
//}
//x();
//const user = ["ashish" , "nikhil","charan","harshii"];
//user.push("kanna");
//console.log(user);
//
//user.pop("ashish");
//console.log(user);
//
//user.shift();
//console.log(user)

let userDetails = {
    id: 2,
    name: "shravan",
    company: "google",
    address: {
        city: "hydrabad",
        area:"nizampet",
    }
};
let userDetails2 = {
    id: 2,
    name: "ashish",
    company: "google",
    address: {
        city: "hydrabad",
        area:"nizampet",
    }
};
let userDetails3 = {
    id: 2,
    name: "ashish",
    company: "google",
    address: {
        city: "hydrabad",
        area:"nizampet",
    }
};
//console.log(userDetails);
//console.log(userDetails.address);
//console.log(userDetails);
//console.log(typeof(userDetails));
//
//let x = JSON.stringify(userDetails);
//console.log(x);
//console.log(typeof(x));
//
//let y = JSON.parse(x);
//console.log(x);

//function fetchUser(){
//    let res = fetch("userDetails");
//    //console.log(res);
//    res
//    .then((response)=>{
//        return response.json().then(data=>{
//            console.log(data);
//            let store = document.getElementById("userDetails");
//            userDetails.map((user)=>{
//                store.innerHTML += `
//                <tr>
//                <td>${user.id}</td>
//                <td>${user.name}</td>
//                <td>${user.company}</td>
//                <td>${user.salary}</td>
//                <td>${user.address}</td>
//                </tr>
//                `
//            })
//        })
//    })
//    .catch(err=>console.log(err))
//}
//fetchUser();

//Modules
export  let  Name ="mru";
export function greet(){
    return "good morning students";
}