// scroll to installation section
let btn = document.getElementById('btnId')
const scrollDiv = ()=>{
    console.log('click')
    let elmntToView = document.getElementById("sectiondiv");
    elmntToView.scrollIntoView({behavior: "smooth"})
}
btn && btn.addEventListener('click',scrollDiv);

/*****sidebar*** */
let sideNavigation = document.getElementById('sidebar');
let hamburger = document.getElementById('sidenav');

const toggleSideNav = ()=>{
    console.log('click')
    sideNavigation.classList.toggle('active');
}
hamburger && hamburger.addEventListener('click',toggleSideNav);

// back to top scroll
const topBtn = document.getElementById("backToTop");
// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = ()=> scrollFunction();

const scrollFunction=()=> {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
const topFunction=()=> {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
topBtn && topBtn.addEventListener('click',topFunction);