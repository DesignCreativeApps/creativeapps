/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onRouteUpdate = ({ location, prevLocation }) => {
    let nav = document.getElementsByTagName("nav");
    const isHome = location.pathname === "/en/" || location.pathname === "/it/";
    if(isHome &&  window.pageYOffset > 50){
        nav[0].classList.add("header-module--headerScrolled--2I3xA");
    }

  }