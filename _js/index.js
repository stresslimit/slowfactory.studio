// import initFastclick from './fastclick.min'
// import { init as mobile_menu, close_mobile_menu } from './mobile-menu'
import typewriter from './typewriter'
// let words = [
//   'Responsible Design',
//   'Ethical Solutions',
//   'Human Centered Design',
//   'Hardware / Software',
//   'Good Marketing',
//   'Data and Code',
//   'Environmental Focus',
//   'Renewable Energy',
//   'The Future is Here',
//   'You still reading?',
//   'Contact Us'
// ]

window.addEventListener('load', (e) => {

  externalLinks()
  // initFastclick()
  // mobile_menu()
  if ( document.getElementById('js-typewriter') )
    typewriter( document.getElementById('js-typewriter') )

  // function shuffle(array) {
  //   return array.sort(() => Math.random() - 0.5);
  // }

})


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
