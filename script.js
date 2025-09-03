document.querySelectorAll('.news-arrows button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Carousel navigation clicked! (Implement logic here)");
  });
});

function setupLinkHover(containerSelector, arrowBlack, arrowWhite) {
  document.querySelectorAll(containerSelector).forEach(container => {
    const title = container.querySelector('.link-title');
    const arrow = container.querySelector(`.${arrowBlack}, .${arrowWhite}`);

    if (!arrow && !title) return;

    container.addEventListener('mouseenter', () => {
      if (arrow) {
        arrow.classList.replace(arrowBlack, arrowWhite);
      }
      if (title) {
        title.style.textDecoration = 'underline';
      }
    });

    container.addEventListener('mouseleave', () => {
      if (arrow) {
        arrow.classList.replace(arrowWhite, arrowBlack);
      }
      if (title) {
        title.style.textDecoration = 'none';
      }
    });
  });
}

setupLinkHover('.link-container', 'top-right-corner-arrow-black', 'top-right-corner-arrow-white');
setupLinkHover('.big-link-container', 'big-top-right-corner-arrow-black', 'big-top-right-corner-arrow-white');

const podcastLink = document.getElementById('podcast-link');
const podcastIcon = document.getElementById('podcast-link-icon');

if (podcastLink && podcastIcon) {
  podcastLink.addEventListener('mouseenter', () => {
    podcastIcon.src = 'images/arrow-top-right-corner-white.svg';
  });
  podcastLink.addEventListener('mouseleave', () => {
    podcastIcon.src = 'images/arrow-top-right-corner-black.svg';
  });
}

const scrollContainer = document.getElementById("scroll-container");
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");

if (scrollContainer && scrollLeft && scrollRight) {
  scrollLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  scrollRight.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });
}

function setupArrowHover(btnId, imgId, whiteSrc, blackSrc) {
  const btn = document.getElementById(btnId);
  const img = document.getElementById(imgId);

  if (!btn || !img) return;

  btn.addEventListener("mouseenter", () => (img.src = whiteSrc));
  btn.addEventListener("mouseleave", () => (img.src = blackSrc));
}

setupArrowHover("scroll-left", "left-arrow-btn", "images/less-than-white.png", "images/less-than-black.png");
setupArrowHover("scroll-right", "right-arrow-btn", "images/greater-than-white.png", "images/greater-than-black.png");
