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

/******copy to clipboard** */
let code = document.getElementById('mycode').innerHTML;
let copyBtn = document.getElementById('copybtn');

const copyToClipboard = ()=>{
     /* For mobile devices */
     let modifiedCode = code.replace(/&lt;/g,'<').replace(/&gt;/g,'>')
   /* Copy the text inside the text field */
 navigator.clipboard.writeText(modifiedCode).then(()=>console.log('copied'));

}
copyBtn && copyBtn.addEventListener('click',copyToClipboard);