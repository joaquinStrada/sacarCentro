export const $$ = (el, parent = document) => parent.querySelectorAll(el)

export const $ = (el, parent = document) => parent.querySelector(el)

export const $id = id => document.getElementById(id)

export const getPos = (e, element) => {
	const style = element.getBoundingClientRect()
	const x = e.clientX - style.left
	const y = e.clientY - style.top

	return {
		x,
		y
	}
}

export const getDistance = (x1, y1, x2, y2) => Math.sqrt(
	Math.pow(x2 - x1, 2) + 
    Math.pow(y2 - y1, 2)
)