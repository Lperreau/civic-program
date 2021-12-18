class CivicMeasure extends HTMLElement {
	connectedCallback() {
		const index = this.getAttribute('index')
		const title = this.getAttribute('title')
		const description = this.getAttribute('description')
		const template = `${index} – ${title} : ${description}`
		this.innerText = template
		console.log(this)
	}
}

customElements.define('civic-measure', CivicMeasure);