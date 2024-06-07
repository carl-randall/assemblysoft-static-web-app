let blogRoot = document.getElementById("blog-post");
let postShadowRoot = blogRoot.attachShadow({ mode: 'open' });

// Remove specific stylesheets from the Shadow DOM
postShadowRoot.querySelectorAll('link[href="/css/site.min.css"], link[href="css/style2.css"]').forEach(link => {
    link.remove();
});

// Add the colour variables to the shadowRoot
// Define the color variables in the Shadow DOM
const styleElem = document.createElement("style");
styleElem.textContent = `
  :host {
      all: initial;
    /* Colours */
    --blue: #3eb0ef;
    --green: #a4d037;
    --purple: #ad26b4;
    --yellow: #fecd35;
    --red: #f05230;
    --darkgrey: #15171A;
    --midgrey: #738a94;
    --lightgrey: #c5d2d9;
    --whitegrey: #e5eff5;
    --pink: #fa3a57;
    --brown: #a3821a;
    --darkmode: color-mod(var(--darkgrey) l(+2%));

    /* Fonts */
    --fa-style-family-classic: "Font Awesome 6 Free";
    --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
    --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
    --fa-style-family-brands: "Font Awesome 6 Brands";
    --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands"
  }
`;
postShadowRoot.appendChild(styleElem);

// Add the screen.css file to the shadowRoot
const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "../../css/screen.css");
postShadowRoot.appendChild(linkElem);

let templateOutput = document.getElementById("templateOutput");

let blogContent = templateOutput.cloneNode(true);
postShadowRoot.appendChild(blogContent);

// Special Resizing for kg-gallery-card image elements
let images = postShadowRoot.querySelectorAll('.kg-gallery-image img');
images.forEach(function (image) {
    let container = image.closest('.kg-gallery-image');
    let width = image.attributes.width.value;
    let height = image.attributes.height.value;
    let ratio = width / height;
    container.style.flex = ratio + " 1 0%";
});

