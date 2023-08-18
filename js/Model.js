import { getAreaTriangle, getCenterTriangle } from './functions.js'

export default class Model {
	constructor() {
		this.view = null
	}

	setView(view) {
		this.view = view
	}

	getCenter(figure) {
		let points = JSON.parse(JSON.stringify(figure))
		let additionArea = 0
		let additionAreaX = 0
		let additionAreaY = 0
		
		while (points.length >= 3) {
			const points2 = []

			for (let i = 0; i < points.length; i += 2) {
				const A = points[i]
				const B = i < points.length - 1 ? points[i + 1] : points[0]
				const C = i < points.length - 2 ? points[i + 2] : points[1]

				// Calculamos el area y el centro
				const area = getAreaTriangle(A.x, A.y, B.x, B.y, C.x, C.y)
				const center = getCenterTriangle(A.x, A.y, B.x, B.y, C.x, C.y)

				// Lo agregamos a las variables
				additionArea += area
				additionAreaX += area * center.x
				additionAreaY += area * center.y

				// Agregamos el ultimo punto a la variable auxiliar
				points2.push(C)
			}

			points = points2
		}

		// Calculamos el centro de la figura
		const x = additionAreaX / additionArea
		const y = additionAreaY / additionArea

		// Armamos el dato de la figura
		const data = {
			center: {
				x,
				y
			},
			points: figure
		}

		this.view.addFigure(data)
	}
}