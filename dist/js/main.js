
//select dom elements

const hamburger = document.querySelector('.hamburger');

const sideNav = document.getElementById('side-bar');

const closeSideNav = document.querySelector('.close-icon');

//event listeners

hamburger.addEventListener('click', revealSideNav);

closeSideNav.addEventListener('click', hideSideNav);


//function for event listener

function revealSideNav(){
  
  closeSideNav.style.visibility = 'visible';
  console.log('click');
  sideNav.classList.add('slide');
}

function hideSideNav(){
  
  closeSideNav.style.visibility = 'hidden';
  sideNav.classList.remove('slide');
}