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
