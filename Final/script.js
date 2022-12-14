var slideIndex = 1;
function plusSlides(n) {
showSlides(slideIndex += n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slideshow-image");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
links[i].addEventListener('click', function(event) {
if (this.hash !== '') {
event.preventDefault();
var hash = this.hash;
window.scrollTo({
top: document.querySelector(hash).offsetTop-20,
behavior: 'smooth'
});
}
});
}
// Show first slide by default
showSlides(slideIndex);
});




var client = contentful.createClient({
    space: 'mxzy1eyelnad',
    accessToken: 'uheI-3MmRz84tApOt3S8TDiVksHvFJTEVBgy-XamERc',
  });

  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
        let slide = document.getElementsByClassName("slideshow-image")
    
        let html = 
            `<hr>
            <div class = "title"> 
                <h2> ${entry.fields.title} </h2>
            </div>
            <p> ${entry.fields.description} </p>
            <img class = "picture" src = "${entry.fields.picture.fields.file.url}"/>`
    
        slide.innerHTML += html
    });
    });
    



    let title = document.createElement('h1');
    title.textContent = entry.fields.title;
    title.classList.add('blog-title');
    blog.append(title);

    let image = document.createElement('img');
    image.src = entry.fields.image.fields.file.url;
    image.classList.add('blog-image');
    blog.append(image);

    // render the body text
    let content = document.createElement('p');
    content.textContent = entry.fields.body;
    blog.append(content);

    
  



