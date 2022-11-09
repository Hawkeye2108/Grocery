const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    entry.target.classList.toggle("fadeInRight",entry.isIntersecting);
   });
},{
    threshold:0.4
});
cards.forEach(card =>{
    observer.observe(card);
});

// Carousel
indexNumber=0;
    const slides = document.querySelectorAll(".carousel_slide");
    slides[0].style.display="block";
    const dots = document.querySelectorAll(".dot");
    dots[0].classList.add("active");
    
    function currentSlides(n){
        indexNumber=n-1;
        showSlides(indexNumber);
    }

    function plusSlides(n){
        indexNumber+=n;
        if(indexNumber>=slides.length)
        indexNumber = 0;
        
        else if(indexNumber < 0)
        indexNumber = slides.length-1;
        
        showSlides(indexNumber);

    }

    function showSlides(n){
        for(i=0;i<slides.length;i++){
            slides[i].style.display = "none";
        }
        slides[indexNumber].style.display = "block";
    for(i=0;i<dots.length;i++){
      dots[i].classList.remove("active");
    }
    dots[n].classList.add("active");
   
    
}