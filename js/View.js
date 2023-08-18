import Canvas from './components/Canvas.js'

export default class View {
	constructor() {
		this.model = null

		this.canvas = new Canvas()
		this.figures = []

		this.canvas.setOnFinish(data => this.onFinishFigure(data))
	}

	setModel(model) {
		this.model = model
	}

	onFinishFigure(data) {
		this.model.getCenter(data)
	}

	addFigure(data) {
		this.figures.push(data)
		this.canvas.addPoint(data.center.x, data.center.y)
	}
}