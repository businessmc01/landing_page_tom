const faqs = document.querySelectorAll(".question")


faqs.forEach(faq =>{
    console.log(faq)
    faq.addEventListener("click",()=>{        
        faqs.forEach(function(answer){
            if (faq !== answer) {
                
                answer.parentElement.classList.remove("active")
              }
        }) 
        faq.parentElement.classList.toggle("active");
    })
})