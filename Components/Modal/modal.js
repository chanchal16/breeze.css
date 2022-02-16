/////dialogs////////////
let modal = document.getElementById("modal1");
let alert = document.getElementById("btn1");
let closeBtn = document.getElementById('closebtn');
// to toggle class
const toggleModal = () => {
  modal.classList.toggle("show-modal");
};
const windowOnClick = (e) => {
  if (e.target === modal) {
    toggleModal();
  } 
};
// add event listeners
alert && alert.addEventListener("click", toggleModal);
closeBtn && closeBtn.addEventListener("click",toggleModal);
window && window.addEventListener("click", windowOnClick);
