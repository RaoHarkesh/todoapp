let inputTag= document.querySelector("input");
let ultag=document.querySelector("ul");
let count =0;
let totalh2=document.querySelector(".sum .total");
inputTag.addEventListener("keydown",function(e){
    let value=inputTag.value;
    if(value!=""){
        let key=e.key;
        if(key=="Enter"){
            inputTag.value="";
            let litag= document.createElement("li");
            litag.innerText=value;
            litag.innerHTML=  `<div class="note">${value}</div>
            <div class="delete"><i class="fa fa-trash"></i></div>`
            
            count++;
            handleremoveli(litag,count);
            ultag.appendChild(litag);
           totalh2.innerText=count; 
            console.log(count);
            
        }
    }
    
})
function handleremoveli(litag){
    let lidiv=litag.querySelector(".delete");
    lidiv.addEventListener("click",function(){
        litag.remove();
        count--;
       console.log(count);
       totalh2.innerText=count;

    })
}
// function handleRemoval(liTag){
//     let deleteDiv = liTag.querySelector(".delete"); 
//     deleteDiv.addEventListener("click",function(){
//         liTag.remove();
//     })
// }