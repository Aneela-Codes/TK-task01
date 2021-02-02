let navbar = document.getElementById('navbar')
let topNav = document.getElementById('top-nav')
// console.log(topNav);
let dropdown = document.querySelector('.dropdown')
let categories = document.querySelector('.categories')
let cardTitle = document.querySelector('.title')

const openMenu = ( ) => {
    navbar.style.display="flex"
       topNav.style.display="none"
       categories.style.display="none"
       dropdown.style.display="flex"

}

const closeMenu = () => {
    navbar.style.display="none"
    topNav.style.display="flex"
    categories.style.display="flex"
    dropdown.style.display="none"
}

// const hoverEffect= () =>{
//     cardTitle.classList.add('hoverClass')
// }