let btn = document.getElementById('btnId')


const scrollDiv = ()=>{
    console.log('click')
    let elmntToView = document.getElementById("sectiondiv");
    elmntToView.scrollIntoView({behavior: "smooth"})
}
btn && btn.addEventListener('click',scrollDiv);