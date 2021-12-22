const botones = document.getElementsByClassName("list__btn");

for (let element of botones) {
  element.addEventListener("click", () => {
    const currentElement = document.querySelector(".list__btn-active");
    console.log(currentElement);

    if (currentElement && currentElement !== element) {
      currentElement.classList.remove("list__btn-active");
      currentElement.nextElementSibling.style.maxHeight = null;
    }

    element.classList.toggle("list__btn-active");

    const panel = element.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const image = document.getElementsByClassName("illustration");
