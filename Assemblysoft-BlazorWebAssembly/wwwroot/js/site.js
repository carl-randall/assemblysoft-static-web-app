// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const elements = document.querySelectorAll(".sub-dropdown.mega-menu.full");
elements.forEach(function (element) {
    element.addEventListener("mouseenter", function (event) {

        // event.stopPropagation();
    });

    element.addEventListener("mouseleave", function (event) {
        // event.stopPropagation();
    });
});
document.querySelectorAll(".steps-tabs .tab-pane").forEach(function (element) {
    element.style.display = null;
});

/*document.querySelectorAll(".dropdown.mega-menu.full .menu-link").forEach(function (element) {
    element.addEventListener('mouseover', function (c) {
        console.log(this.dataset.preview_target);
        const preview_target = c.dataset.preview_target;
        console.log(preview_target);
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    jQuery(".dropdown.mega-menu.full").on("mouseover", ".menu-link", function () {
        jQuery(".menu-content").each(function () {
            jQuery(this).removeClass("visible");
            /*jQuery(this).removeClass("d-flex");*/
        });

        const previewtarget = jQuery(this).data('previewtarget');
        if (previewtarget) {
            console.log(previewtarget);
            jQuery("#" + previewtarget).addClass("visible");
        }
    });
    // .sub-dropdown .close-btn
    jQuery(".sub-dropdown .close-btn").on("click", function () {
        jQuery(this).parents('.sub-dropdown').css("display", "none");
    });
    document.querySelectorAll(".timeline-5").forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            // if (vw > 991) {
            console.log("ENTER");
            console.log(this);
            var tagertTabEl = document.querySelector(this.dataset.target);
            var active = document.querySelector('.steps-tabs .show.active');

            tagertTabEl.classList.add("active");
            tagertTabEl.classList.add("show");
            if (document.querySelector('.timeline-5.active')) {
                document.querySelector('.timeline-5.active').classList.remove("active");
            }
            this.classList.add("active");
            if (active) {
                active.style.display = "none";
                active.classList.remove("active");
                active.classList.remove("show");
            }
            // }
        });
    });
});