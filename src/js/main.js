const burger_btn = document.querySelector('.navbar-toggler')
const navList = document.querySelector('.navbar-collapse')
const menuItem = document.querySelectorAll('.nav-link')
const menuList = document.querySelector('.navbar-nav')
const logo = document.querySelector('.navbar-brand')

const showNav = () => {
	burger_btn.classList.toggle('collapsed')
	navList.classList.toggle('showNav')
}

const closeMenu = () => {
	navList.classList.remove('showNav')
}

burger_btn.addEventListener('click', showNav)
logo.addEventListener('click', closeMenu)

menuItem.forEach(item =>
	item.addEventListener('click', () => {
		closeMenu()

		// if (item.classList.contains('active')) {
		// 	item.style = 'background-color: black'
		// } else {
		// 	item.classList.toggle('active')
		// }
	})
)
