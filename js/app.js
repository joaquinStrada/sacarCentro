import Model from './Model.js'
import View from './View.js'

window.addEventListener('load', () => {
	const model = new Model()
	const view = new View()

	model.setView(view)
	view.setModel(model)
})