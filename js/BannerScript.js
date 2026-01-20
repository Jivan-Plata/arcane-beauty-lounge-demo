document.addEventListener("DOMContentLoaded", function () {
    var bannerOptions = document.querySelectorAll(".bannerOption");

    function setActiveClass() {
        var currentPath = window.location.pathname.split("/").pop(); 
        bannerOptions.forEach(function (option) {
            var href = option.getAttribute("href").split("/").pop(); 
            if (currentPath === href) {
                option.classList.add("active");
            } else {
                option.classList.remove("active");
            }
        });
    }

    setActiveClass();
});
