$( document ).ready(function() {

    // detail section
    let detailOpened = document.getElementById("detailOpened");
    let detailButton = document.getElementById("detailButton");
    let detailContent = document.getElementById("detail-content");
    let detailMoreText = document.getElementById("detailMore");
    let detailReadMoreClick = document.getElementById('detailReadMoreClick');

    // care section
    let careContent = document.getElementById("care-content");
    let careButton = document.getElementById("care-button");

    //circularity section
    let circularityButton = document.getElementById("circularity-button");
    let circularityContent = document.getElementById("circularity-content");
    let circularityOpened = document.getElementById("circularity-opened");
    let circularityMore = document.getElementById("circularity-more");
    let circularityReadMoreClick = document.getElementById("circularity-read-more-click");


    // detail button click to show and hide
    document.getElementById("detailButton").addEventListener("click", openDetail);
    function openDetail() {
        if (detailOpened.style.display === "block") {
            detailOpened.style.display = "none";
            detailButton.style.opacity = "100%";
            detailContent.style.display = "none";
            detailMoreText.style.display = "none";
        } else {
            detailOpened.style.display = "block";
            detailButton.style.opacity = "50%";
            detailContent.style.display = "block";
            detailReadMoreClick.style.display = "inline";
            // careContent.style.display = "none";
            // careButton.style.opacity = "100%";
            // circularityContent.style.display = "none";
            // circularityButton.style.opacity = "100%";
        }
    }

    // under detail section click read more to show more contents.
    document.getElementById("detailReadMoreClick").addEventListener("click", detailReadMore);
    function detailReadMore () {
        detailMoreText.style.display = "block";
        detailReadMoreClick.style.display = "none";
    }

    // Care button click to show and hide
    document.getElementById("care-button").addEventListener("click", openCare);
    function openCare() {
        if (careContent.style.display === "block"){
            careContent.style.display = "none";
            careButton.style.opacity = "100%";

        } else {
            careContent.style.display = "block";
            careButton.style.opacity = "50%";
            // detailContent.style.display = "none";
            // detailButton.style.opacity = "100%";
        }
    }

    // circularity button to show and hide
    document.getElementById("circularity-buttonPatagoniaBefore").addEventListener("click", openCircularity);
    function openCircularity() {
        if (circularityOpened.style.display === "block") {
            circularityOpened.style.display = "none";
            circularityButton.style.opacity = "100%";
            circularityContent.style.display = "none";
            circularityMore.style.display = "none";
        } else {
            circularityOpened.style.display = "block";
            circularityButton.style.opacity = "50%";
            circularityContent.style.display = "block";
            circularityReadMoreClick.style.display = "inline";
            // careContent.style.display = "none";
            // careButton.style.opacity = "100%";
            // detailContent.style.display = "none";
            // detailButton.style.opacity = "100%";
        }
    }

    // under circularity section click read more to show more contents.
    document.getElementById("circularity-read-more-click").addEventListener("click", circularityReadMore);
    function circularityReadMore () {
        circularityMore.style.display = "block";
        circularityReadMoreClick.style.display = "none";
    }


    //language drop down menu
    document.getElementById("languageClick").addEventListener("click",clickLanguage);
    function clickLanguage() {
        document.getElementById("languageDropdown").classList.toggle("show");
        console.log("clicked");
    }

    // Close the language dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.language')) {
            var dropdowns = document.getElementsByClassName("language-dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }




});