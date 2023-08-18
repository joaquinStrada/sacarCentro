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

export const getAreaTriangle = (Ax, Ay, Bx, By, Cx, Cy) => {
	const ab = getDistance(Ax, Ay, Bx, By)
	const bc = getDistance(Bx, By, Cx, Cy)
	const ca = getDistance(Cx, Cy, Ax, Ay)
	const s = (ab + bc + ca) / 2
	return Math.sqrt(
		s * (s - ab) * (s - bc) * (s - ca)
	)
}

export const getCenterTriangle = (Ax, Ay, Bx, By, Cx, Cy) => {
	const a = Ay + By
	const b = By - Ay
	const c = Ax + Bx
	const d = Ax - Bx
	const e = By + Cy
	const f = Cy - By
	const g = Cx + Bx
	const h = Bx - Cx
	const x = ((e * f * b) + (c * d * f) - (g * h * b) - (a * b * f)) / ((2 * d * f) - (2 * h * b))
	const y = ((2 * h * x) + (e * f) - (g * h)) / (2 * f)

	return {
		x,
		y
	}
}