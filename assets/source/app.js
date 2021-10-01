const faqs = document.querySelectorAll(".question")


faqs.forEach(faq =>{
    faq.addEventListener("click",()=>{        
        faqs.forEach(function(answer){
            if (faq !== answer) {
                
                answer.parentElement.classList.remove("active")
              }
        }) 
        faq.parentElement.classList.toggle("active");
    })
})

/*Carousel Script*/
const caroselImages = document.querySelector(".caroseul-container")
       const carouselButtons = document.querySelectorAll(".carousel_button")
       const numberOfImages = document.querySelectorAll(".caroseul-container img").length
      
       let imageIndex = 1
       let translateX = 0

       

       carouselButtons.forEach(button => {
           button.addEventListener("click",(ev) =>{
               if (event.target.id == "previous"){
                   if(imageIndex == 1){
                       imageIndex = numberOfImages
                       translateX -= parseFloat(getComputedStyle(document.querySelector(".carousel")).width)*(numberOfImages-1)

                   } else if (imageIndex !== 1){
                       imageIndex--;
                       translateX += parseFloat(getComputedStyle(document.querySelector(".carousel")).width);
                   }
               } else {
                    
                   if (imageIndex == numberOfImages){
                       imageIndex = 1
                       translateX += parseFloat(getComputedStyle(document.querySelector(".carousel")).width)*(numberOfImages-1)

                   } else {
                       imageIndex++
                       translateX -=parseFloat(getComputedStyle(document.querySelector(".carousel")).width)
                   }
               }
               caroselImages.style.transform = `translateX(${translateX}px`
           })
       })

/*Fim carousel*/