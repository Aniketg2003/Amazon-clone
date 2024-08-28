/*let re=document.querySelector("h2");
console.dir(re.innerText);


re.innerText = re.innerText + " by own";*/

let xt =document.querySelectorAll(".box");
console.log(xt);

idx=1;
for(div of xt){
    div.innerText=`this is box ${idx}`
     idx++;
    }
/*
xt[1].innerText="this is second box";
xt[0].innerText="tihs is first box";
xt[2].innerText="this is third box";*/
/*
let newBt=document.createElement("button");
newBt.innerText="Click Me";
newBt.style.backgroundColor="red";
newBt.style.color="white";
let newHead=document.querySelector("body")
newHead.prepend(newBt);
*/

let newAdd=document.querySelector("p");

let but1=document.querySelector("#btn1");
let backColor="white";
but1.addEventListener("click",() => {
     if(backColor==="white"){
        backColor="dark";
        document.querySelector("body").style.backgroundColor="black";
     }else{
        backColor="white";
        document.querySelector("body").style.backgroundColor="white0"
        4;
     }

    console.log(backColor);
});
