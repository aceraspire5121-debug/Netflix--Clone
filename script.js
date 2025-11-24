let z=document.querySelector(".input-design2")
document.querySelector(".button-design2").addEventListener("click",()=>{
     let b=z.value.trim()
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(b)
    {
        if(emailPattern.test(b)){
        alert("Sorry,We have not designed more pages yet.Work is in processing....")
        }
        else{
            alert("Enter a valid email address")
        }
    }
    else{
        alert("Enter a email address")
    }
})
let a=document.querySelector(".input-design")
document.querySelector(".button-design").addEventListener("click",()=>{
    let b=a.value.trim()
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(b)
    {
        if(emailPattern.test(b)){
        alert("Sorry,We have not designed more pages yet.Work is in processing....")
        }
        else{
            alert("Enter a valid email address")
        }
    }
    else{
        alert("Enter a email address")
    }
})


