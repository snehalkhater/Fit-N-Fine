 const slides = document.getElementById("slides");
    const images = slides.querySelectorAll("img");
    let index = 0;

    // Clone first image for smooth loop
    const firstClone = images[0].cloneNode(true);
    slides.appendChild(firstClone);

    const totalSlides = slides.children.length;

    function autoSlide() {
      index++;
      slides.style.transition = "transform 1s ease-in-out";
      slides.style.transform = `translateX(-${index * 100}%)`;

      if (index === totalSlides - 1) {
        setTimeout(() => {
          slides.style.transition = "none";
          index = 0;
          slides.style.transform = `translateX(0)`;
        }, 1000);
      }
    }

    setInterval(autoSlide, 3000);