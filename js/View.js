import Canvas from './components/Canvas.js'

export default class View {
	constructor() {
		this.model = null

		this.canvas = new Canvas()

		this.canvas.setOnFinish(data => this.onFinishFigure(data))
	}

	setModel(model) {
		this.model = model
	}

	onFinishFigure(data) {
		console.log(data)
	}
}