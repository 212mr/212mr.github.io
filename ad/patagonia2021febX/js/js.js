$( document ).ready(function() {

    // button ONE section
    let buttonOneContentOpened = document.getElementById("buttonOneContentOpened");
    let buttonOne = document.getElementById("buttonOne");
    let buttonOneContent = document.getElementById("buttonOne-content");


    // buttonPatagoniaBefore TWO section
    let buttonTwoContent = document.getElementById("buttonTwoContent");
    let buttonTwo = document.getElementById("buttonTwo");


    //buttonPatagoniaBefore THREE section
    let buttonThree = document.getElementById("buttonThree");
    let buttonThreeContent = document.getElementById("buttonThreeContent");
    let buttonThreeContentOpened = document.getElementById("buttonThreeContentOpened");
    let buttonThreeContentOpenedMore = document.getElementById("buttonThreeContentOpenedMore");
    let buttonThreeReadMoreClick = document.getElementById("buttonThreeReadMoreClick");


    // buttonPatagoniaBefore FOUR section
    let buttonFourContent = document.getElementById("buttonFourContent");
    let buttonFour = document.getElementById("buttonFour");


    // button ONE click to show and hide
    document.getElementById("buttonOne").addEventListener("click", openButtonOne);
    function openButtonOne() {
        if (buttonOneContentOpened.style.display === "block") {
            buttonOneContentOpened.style.display = "none";
            buttonOne.style.color = "#000";
            buttonOne.style.backgroundColor = "#fff";
            buttonOneContent.style.display = "none";
            // buttonOneContentMore.style.display = "none";
        } else {
            buttonOneContentOpened.style.display = "block";
            buttonOne.style.color = "#fff";
            buttonOne.style.backgroundColor = "#000";
            buttonOneContent.style.display = "block";
            console.log('clicked already button changed color and content is showing');
        }
    }


    // button  TWO click to show and hide
    document.getElementById("buttonTwo").addEventListener("click", openButtonTwo);
    function openButtonTwo() {
        if (buttonTwoContent.style.display === "block"){
            buttonTwoContent.style.display = "none";
            buttonTwo.style.color = "#000";
            buttonTwo.style.backgroundColor = "#fff";
        } else {
            buttonTwoContent.style.display = "block";
            buttonTwo.style.color = "#fff";
            buttonTwo.style.backgroundColor = "#000";
        }
    }


    // button  THREE to show and hide
    document.getElementById("buttonThree").addEventListener("click", openButtonThree);
    function openButtonThree() {
        if (buttonThreeContentOpened.style.display === "block") {
            buttonThreeContentOpened.style.display = "none";
            buttonThree.style.color = "#000";
            buttonThree.style.backgroundColor = "#fff";
            buttonThreeContent.style.display = "none";
            buttonThreeContentOpenedMore.style.display = "none";
        } else {
            buttonThreeContentOpened.style.display = "block";
            buttonThree.style.color = "#fff";
            buttonThree.style.backgroundColor = "#000";
            buttonThreeContent.style.display = "block";
            buttonThreeReadMoreClick.style.display = "inline";

        }
    }

    // under button  THREE section click read more to show more contents.
    document.getElementById("buttonThreeReadMoreClick").addEventListener("click", buttonThreeReadMore);
    function buttonThreeReadMore () {
        buttonThreeContentOpenedMore.style.display = "block";
        buttonThreeReadMoreClick.style.display = "none";
    }


    // button  Four click to show and hide
    document.getElementById("buttonFour").addEventListener("click", openButtonFour);
    function openButtonFour() {
        if (buttonFourContent.style.display === "block"){
            buttonFourContent.style.display = "none";
            buttonFour.style.color = "#000";
            buttonFour.style.backgroundColor = "#fff";
        } else {
            buttonFourContent.style.display = "block";
            buttonFour.style.color = "#fff";
            buttonFour.style.backgroundColor = "#000";
        }
    }



    //language drop down menu
    document.getElementById("languageClick").addEventListener("click",clickLanguage);
    function clickLanguage() {
        document.getElementById("languageDropdown").classList.toggle("show");
        console.log("language clicked");
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