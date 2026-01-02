// (function() {
    // start

    let galleryItem = document.getElementsByClassName("gallery-item");
    let lightBoxContainer = document.createElement("div");
    let lightBoxContent = document.createElement("div");
    let lightBoxImg = document.createElement("img");
    let lightBoxPrev = document.createElement("div");
    let lightBoxNext = document.createElement("div");

    //>
    let lightBoxPrevI = document.createElement("i");
    let lightBoxNextI = document.createElement("i");
    //^

    lightBoxContainer.classList.add("lightbox");
    lightBoxContent.classList.add("lightbox-content");
    lightBoxPrev.classList.add("lightbox-prev");
    lightBoxNext.classList.add("lightbox-next");

    //>
    lightBoxPrevI.classList.add("icon", "fa-angle-left");
    lightBoxNextI.classList.add("icon", "fa-angle-right");
    //^ "fas", "fa-angle-left",

    lightBoxContainer.appendChild(lightBoxContent);
    lightBoxContent.appendChild(lightBoxImg);
    lightBoxContent.appendChild(lightBoxPrev);
    lightBoxContent.appendChild(lightBoxNext);

    //>
    lightBoxPrev.appendChild(lightBoxPrevI);
    lightBoxNext.appendChild(lightBoxNextI);
    //^

    document.body.appendChild(lightBoxContainer);

    let index = 1;

    function showLightBox(n) {
        if (n > galleryItem.length) {
            index = 1;
        } else if (n < 1) {
            index = galleryItem.length;
        }
        let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
        lightBoxImg.setAttribute("src", imageLocation);
    }

    function currentImage() {
        lightBoxContainer.style.display = "block";

        let imageIndex = parseInt(this.getAttribute("data-index"));
        showLightBox(index = imageIndex);
    }
    for (let i = 0; i < galleryItem.length; i++) {
        galleryItem[i].addEventListener("click", currentImage);
    }

    function slideImage(n) {
        showLightBox(index += n);
    }
    function prevImage() {
        slideImage(-1);
    }
    function nextImage() {
        slideImage(1);
    }
    lightBoxPrev.addEventListener("click", prevImage);
    lightBoxNext.addEventListener("click", nextImage);

    function closeLightBox() {
        if (this === event.target) {
            lightBoxContainer.style.display = "none";
        }
    }
    lightBoxContainer.addEventListener("click", closeLightBox);

    //end
// })();


