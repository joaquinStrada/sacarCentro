import { $id, getPos, getDistance } from '../functions.js'

export default class Canvas {
	constructor() {
		this.canvas = $id('draw')
		this.ctx = null

		this.drawing = false
		this.points = []
		this.minDistance = 10
		this.onFinish = () => {}

		this.canvas.addEventListener('click', e => this.onClick(e))

		this.render()
	}

	onClick(e) {
		// Restricciones
		if (!this.drawing) {
			const pos = getPos(e, this.canvas)
			this.points = [pos]
			this.drawing = true
			return
		}


		const pos = getPos(e, this.canvas)
		const { length } = this.points
		const isFinish = this.isFinish(e)

		// Verificamos si el punto cierra la figura
		if (isFinish.valid) {
			// Dibujamos la ultima linea
			this.ctx.lineWidth = 2
			this.ctx.lineStyle = '#000'
			this.ctx.beginPath()
			this.ctx.moveTo(this.points[length - 1].x, this.points[length - 1].y)
			this.ctx.lineTo(this.points[isFinish.index].x, this.points[isFinish.index].y)
			this.ctx.stroke()
			this.drawing = false
			return this.onFinish(this.points)
		} else {
			// En caso contrario dibujamos y agregamos el punto a la figura
			this.ctx.lineWidth = 2
			this.ctx.lineStyle = '#000'
			this.ctx.beginPath()
			this.ctx.moveTo(this.points[length - 1].x, this.points[length - 1].y)
			this.ctx.lineTo(pos.x, pos.y)
			this.ctx.stroke()
			this.points.push(pos)
		}
	}

	render() {
		const style = this.canvas.getBoundingClientRect()
       
		this.canvas.setAttribute('width', style.width)
		this.canvas.setAttribute('height', style.height)

		this.ctx = this.canvas.getContext('2d')
	}

	isFinish(e) {
		const pos = getPos(e, this.canvas)
		const distances = this.points.map(point => getDistance(pos.x, pos.y, point.x, point.y))
		let minDistance = null
		let index = null

		distances.forEach((distance, i) => {
			if (minDistance === null || distance < minDistance) {
				minDistance = distance
				index = i
			}
		})

		return {
			valid: minDistance <= this.minDistance,
			index
		}
	}

	setOnFinish(callback) {
		this.onFinish = callback
	}

	addPoint(x, y) {
		this.ctx.fillStyle = '#000'
		this.ctx.beginPath()
		this.ctx.arc(x, y, 10, 0, 2 * Math.PI, false)
		this.ctx.fill()
	}
}