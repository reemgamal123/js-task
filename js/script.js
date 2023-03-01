var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var result = document.querySelector("#result")
var sum = document.querySelectorAll(".list li")
var total = 0
sum.forEach(function(item){
    item.onclick=function(){
        total += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + ","
        if(content.innerHTML!="")
        btn.style.display='block'
        btn.style.width='200px'
        btn.style.margin='auto'
        btn.style.borderRadius='20px'
        btn.style.borderStyle="none"


    }
}
)
btn.onclick=function(){
    result.innerHTML=total
    result.style.textAlign='center'
result.style.border='1px solid black'
result.style.marginTop="10px"
    
   
}
// result.innerHTML.style.margin='auto'
// result.style.border='1px solid black'