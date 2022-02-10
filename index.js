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

/******copy to clipboard** */
let code = document.querySelector('.mycode').innerHTML;
let copyBtn = document.getElementById('copybtn');
let toolTip = document.getElementById('tooltip')

const copyToClipboard = ()=>{
  let modifiedCode = code.replace(/&lt;/g,'<').replace(/&gt;/g,'>')
   /* Copy the code */
  navigator.clipboard.writeText(modifiedCode).then(()=>console.log('copied'));
  toolTip.innerHTML="copied!"
  toolTip.classList.add('showtooltip');
  setTimeout(() => {
    toolTip.className = toolTip.className.replace("showtooltip", "");
  }, 2000);

}
copyBtn && copyBtn.addEventListener('click',copyToClipboard);