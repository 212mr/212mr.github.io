$( document ).ready(function() {

    document.getElementById("tab1Button").className = "tabButtonHighlight";
    document.getElementById("stepBack").style.opacity = "0";


    document.getElementById("tab1Content").style.display = "";
    document.getElementById("tab2Content").style.display = "";
    document.getElementById("tab3Content").style.display = "none";
    document.getElementById("tab4Content").style.display = "none";
    document.getElementById("tab4SubContent").style.display = "none";


    document.getElementById("tab1Button").addEventListener("click", highlight1);
    document.getElementById("tab2Button").addEventListener("click", highlight2);
    document.getElementById("tab3Button").addEventListener("click", highlight3);
    document.getElementById("tab4Button").addEventListener("click", highlight4);


    // document.getElementById("journeyMain2").addEventListener("click",showSubContent);
    // document.getElementById("journeyMain3").addEventListener("click",showSubContent);
    // document.getElementById("journeyMain4").addEventListener("click",showSubContent);



//What happens when you click on tab 1 bottom button:
    function highlight1() {
        document.getElementById("tab1Button").className = "tabButtonHighlight";
        document.getElementById("tab2Button").className = "tabButtonNone";
        document.getElementById("tab3Button").className = "tabButtonNone";
        document.getElementById("tab4Button").className = "tabButtonNone";
        document.getElementById("stepBack").style.opacity = "0";

        document.getElementById("tab1Content").style.display = "";
        document.getElementById("tab2Content").style.display = "";
        document.getElementById("tab3Content").style.display = "none";
        document.getElementById("tab4Content").style.display = "none";
        document.getElementById("tab4SubContent").style.display = "none";
    }

//What happens when you click on tab 2 bottom button:
    function highlight2() {
        document.getElementById("tab1Button").className = "tabButtonNone";
        document.getElementById("tab2Button").className = "tabButtonHighlight";
        document.getElementById("tab3Button").className = "tabButtonNone";
        document.getElementById("tab4Button").className = "tabButtonNone";
        document.getElementById("stepBack").style.opacity = "0";

        document.getElementById("tab1Content").style.display = "";
        document.getElementById("tab2Content").style.display = "";
        document.getElementById("tab3Content").style.display = "none";
        document.getElementById("tab4Content").style.display = "none";
        document.getElementById("tab4SubContent").style.display = "none";
    }

//What happens when you click on tab 3 bottom button:
    function highlight3() {
        document.getElementById("tab1Button").className = "tabButtonNone";
        document.getElementById("tab2Button").className = "tabButtonNone";
        document.getElementById("tab3Button").className = "tabButtonHighlight";
        document.getElementById("tab4Button").className = "tabButtonNone";
        document.getElementById("stepBack").style.opacity = "0";

        document.getElementById("tab1Content").style.display = "none";
        document.getElementById("tab2Content").style.display = "none";
        document.getElementById("tab3Content").style.display = "";
        document.getElementById("tab4Content").style.display = "none";
        document.getElementById("tab4SubContent").style.display = "none";
    }

//What happens when you click on tab 4 bottom button:
    function highlight4() {
        document.getElementById("tab1Button").className = "tabButtonNone";
        document.getElementById("tab2Button").className = "tabButtonNone";
        document.getElementById("tab3Button").className = "tabButtonNone";
        document.getElementById("tab4Button").className = "tabButtonHighlight";

        document.getElementById("tab1Content").style.display = "none";
        document.getElementById("tab2Content").style.display = "none";
        document.getElementById("tab3Content").style.display = "none";
        document.getElementById("tab4Content").style.display = "";
        document.getElementById("tab4SubContent").style.display = "none";
        document.getElementById("stepBack").style.opacity = "0";


        document.getElementById("journeyMain1").addEventListener("click", showSubContent);
        document.getElementById("journeyMain2").addEventListener("click", showSubContent);
        document.getElementById("journeyMain3").addEventListener("click", showSubContent);
        document.getElementById("journeyMain4").addEventListener("click", showSubContent);

        document.getElementById("stepBack").addEventListener("click", stepBackToTab4);

        // When you click the event list in Tab 4 journey, it will show the timeline of journey
        function showSubContent(){
            console.log("show sub content journey timeline ");
            document.getElementById("tab1Content").style.display = "none";
            document.getElementById("tab2Content").style.display = "none";
            document.getElementById("tab3Content").style.display = "none";
            document.getElementById("tab4Content").style.display = "none";
            document.getElementById("tab4SubContent").style.display = "";
            document.getElementById("stepBack").style.opacity = "1";
        }

        //click go back to tab 4
        function stepBackToTab4(){
            console.log("click go back to tab 4");
            document.getElementById("tab1Content").style.display = "none";
            document.getElementById("tab2Content").style.display = "none";
            document.getElementById("tab3Content").style.display = "none";
            document.getElementById("tab4Content").style.display = "";
            document.getElementById("tab4SubContent").style.display = "none";
            document.getElementById("stepBack").style.opacity = "0";
        }
    }



// Language Drop Down Menu
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

//tab 1 click read more to show more content//
    document.getElementById("tab1readMoreLink").addEventListener("click",tab1readMoreClick);
    function tab1readMoreClick() {
        var tab1dots = document.getElementById("tab1dots");
        var tab1moreContent = document.getElementById("tab1moreContent");
        var tab1readMoreLink = document.getElementById("tab1readMoreLink");

        if (tab1dots.style.display === "none") {
            tab1dots.style.display = "inline";
            tab1readMoreLink.innerHTML = "Read more";
            tab1moreContent.style.display = "none";
        } else {
            tab1dots.style.display = "none";
            tab1readMoreLink.innerHTML = "";
            tab1moreContent.style.display = "inline";
        }
    }


//tab 3 click read more to show more content//
    document.getElementById("tab3readMoreLink").addEventListener("click",tab3readMoreClick);
    function tab3readMoreClick() {
        var tab3dots = document.getElementById("tab3dots");
        var tab3moreContent1 = document.getElementById("tab3moreContent1");
        var tab3moreContent2 = document.getElementById("tab3moreContent2");
        var tab3readMoreLink = document.getElementById("tab3readMoreLink");

        if (tab3dots.style.display === "none") {
            tab3dots.style.display = "inline";
            tab3readMoreLink.innerHTML = "Read more";
            tab3moreContent1.style.display = "none";
            tab3moreContent2.style.display = "none";
        } else {
            tab3dots.style.display = "none";
            tab3readMoreLink.innerHTML = "";
            tab3moreContent1.style.display = "inline";
            tab3moreContent2.style.display = "inline";
        }
    }

// Tab 3 click address1 to open modal
    var addressModal1 = document.getElementById("addressModal1");
    var address1 = document.getElementById("address1");
    var addressClose1 = document.getElementById("addressClose1");

    address1.onclick = function() {
        addressModal1.style.display = "block";
    }

    addressClose1.onclick = function() {
        addressModal1.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == addressModal1) {
            addressModal1.style.display = "none";
        }
    }

// Tab 3 click address2 to open modal
    var addressModal2 = document.getElementById("addressModal2");
    var address2 = document.getElementById("address2");
    var addressClose2 = document.getElementById("addressClose2");

    address2.onclick = function() {
        addressModal2.style.display = "block";
    }

    addressClose2.onclick = function() {
        addressModal2.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == addressModal2) {
            addressModal2.style.display = "none";
        }
    }

// Tab 3 click address3 to open modal
    var addressModal3 = document.getElementById("addressModal3");
    var address3 = document.getElementById("address3");
    var addressClose3 = document.getElementById("addressClose3");

    address3.onclick = function() {
        addressModal3.style.display = "block";
    }

    addressClose3.onclick = function() {
        addressModal3.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == addressModal3) {
            addressModal3.style.display = "none";
        }
    }





});