function add(){

let input1=parseInt(document.getElementById("ip1").value)
let value1=input1
let input2=parseInt(document.getElementById("ip2").value)
let value2=input2
const answer=value1+value2
console.log(answer)

let take=document.getElementById("a1")
take.innerHTML = answer
}



function sub(){
    let input1=parseInt(document.getElementById("ip1").value)
    let value1=input1
    let input2=parseInt(document.getElementById("ip2").value)
    let value2=input2
    const answer=value1-value2
    console.log(answer)

    let make=document.getElementById("a1")
    make.innerHTML=answer
}
function mul(){
    let input1=parseInt(document.getElementById("ip1").value)
    let value1=input1
    let input2=parseInt(document.getElementById("ip2").value)
    let value2=input2
    const answer=input1*input2
    console.log(answer)

    let wake=document.getElementById("a1")
    wake.innerHTML=answer
}
function div(){
    let input1=parseInt(document.getElementById("ip1").value)
    let value1=input1
    let input2=parseInt(document.getElementById("ip2").value)
    let value2=input2
    const answer=value1/value2
    console.log(answer)

    let lake=document.getElementById("a1")
    lake.innerHTML=answer
}
const copyrights=document.getElementById("i1")
console.log(copyrights);
copyrights.onclick=function(){
alert("HI 👋 ,This Page is owned by BOOPALAN");
}


