// let sidebar = document.getElementById("sidebar_menu");
//   let mainPage = document.getElementById("main-page");
// let checked = () => {
//   let checkbox = document.getElementById("sidebar_checkbox").checked;

//   if (checkbox) {
//     sidebar.style ="transform: translateX(-100%)";

//     console.log("not");
//   } else {
//     sidebar.style ="transform: translateX(0%)";
//     console.log("yes");
//   }
// };

// let openSidebar = () => {
//   let screenWidth = window.innerWidth;
//   if (screenWidth > 767) {
//     console.log("hdhdh");
//     document.getElementById("sidebar_checkbox").checked = true;
//     sidebar.style =
//       "transform: translateX(0%);z-index: 12;";
//   }
//   if(screenWidth < 768){
//     document.getElementById("sidebar_checkbox").checked = false;
//     sidebar.style = "transform: translateX(-100%);";
//   }
// };

// window.addEventListener("resize",openSidebar);

const switchSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("d-none");
  sidebar.classList.toggle("show");

  sidebarResize();
};

let sidebarResize = () => {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    let xmark = document.getElementsByClassName("xmark");
    xmark.setAttribute("style", "display:block");

    let sideBar = document.getElementById("sidebar");
    sideBar.setAttribute("style", "width:30%");

    let bars = document.getElementById("3bars");
    bars.setAttribute("style", "display:block");

    let main_page = document.getElementById("main-page");
    main_page.setAttribute("style", "position:absolute");
  }
  if (screenWidth > 767) {
    // let xmark=document.getElementsByClassName("xmark")
    // xmark.setAttribute("style","display:none")

    let bars = document.getElementById("3bars");
    bars.setAttribute("style", "display:none");

    let main_page = document.getElementById("main-page");
    main_page.setAttribute("style", "position:absolute");
  }
};
window.addEventListener("resize", sidebarResize);
