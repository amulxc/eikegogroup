
  const slider = document.querySelector('.slider');
  const totalItems = document.querySelectorAll('.item').length;

  function updateProgress() {
    const fraction = document.querySelector('.fraction');
    const progressBar = document.querySelector('.progress-bar');

    const items = document.querySelectorAll('.slider .item');
    const firstItem = items[0];
    const currentIndex = parseInt(firstItem.getAttribute('data-index'), 10);

    // Update fraction number
    // fraction.textContent = `${currentIndex + 1} / ${totalItems}`;
    fraction.textContent = `${currentIndex + 1}`;

    // Update progress bar width
    const progressPercentage = ((currentIndex + 1) / totalItems) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }

  function activate(e) {
    if (e.target.matches('.next')) {
      const items = document.querySelectorAll('.slider .item');
      slider.appendChild(items[0]);
      updateProgress();
    }
    if (e.target.matches('.prev')) {
      const items = document.querySelectorAll('.slider .item');
      slider.insertBefore(items[items.length - 1], slider.firstChild);
      updateProgress();
    }
  }

  document.addEventListener('click', activate, false);

  window.addEventListener('load', function() {
    // Assign data-index to each item
    const items = document.querySelectorAll('.slider .item');
    items.forEach((item, index) => {
      item.setAttribute('data-index', index);
    });
    updateProgress();
  });



  // scroll video 
  // window.addEventListener("scroll", function () {
  //   const yourElement = document.getElementById("#rental");
  //   if (window.scrollY > 1600) {
  //     yourElement.classList.add("scrolled");
  //   } else {
  //     yourElement.classList.remove("scrolled");
  //   }
  // });
  