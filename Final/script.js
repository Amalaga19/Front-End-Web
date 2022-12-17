var client = contentful.createClient({
    space: 'mxzy1eyelnad',
    accessToken: 'uheI-3MmRz84tApOt3S8TDiVksHvFJTEVBgy-XamERc',
  });
  
  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      console.log(entry);
      let slide = document.getElementById("slide");
      let slideImage = document.createElement("div");
      slideImage.classList.add("slideshow-image");
      let html =
        `<div class="title">
           <h2>${entry.fields.title}</h2>
         </div>
         <img class="picture" src="${entry.fields.picture.fields.file.url}" />
         <p>${entry.fields.description}</p>`;
      slideImage.innerHTML = html;
      slide.appendChild(slideImage);
    });
    // Show first slide by default
    showSlides(slideIndex);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
        if (this.hash !== '') {
          event.preventDefault();
          var hash = this.hash;
          window.scrollTo({
            top: document.querySelector(hash).offsetTop - 20,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
  var slideIndex = 1;
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-image");
    console.log(slides);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  