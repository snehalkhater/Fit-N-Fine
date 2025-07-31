    const slider = document.getElementById("slider");
    const cardWidth = 270; // 250px + margin
    const totalCards = slider.children.length;
    let currentIndex = 0;

    function slideRight() {
      currentIndex++;
      if (currentIndex >= totalCards) currentIndex = 0;
      slider.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth"
      });
    }

    function slideLeft() {
      currentIndex--;
      if (currentIndex < 0) currentIndex = totalCards - 1;
      slider.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth"
      });
    }
 
