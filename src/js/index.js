class CivicMeasure extends HTMLElement {
	connectedCallback() {
		const index = this.getAttribute('index')
		const title = this.getAttribute('title')
		const description = this.getAttribute('description')
		this.innerHTML = `
<article>
	<header>
		<h1>${index} - ${title}</h1>
	</header>
	<main>${description}</main>
</article>
`
	}
}

class CivicMeasures extends HTMLElement {
	connectedCallback() {
		fetch('../data/measures.json')
			.then(res => res.json())
			.then(data => {
				this.measures = data
				this.render()
			})
	}
	render() {
		this.innerHTML = this.measures
			.map(measure => `
<civic-measure
index="${measure.index}"
title="${measure.title}"
description="${measure.description}"
></civic-measure>`)
			.reduce((all, item) => all + item)
	}
}

customElements.define('civic-measure', CivicMeasure);
customElements.define('civic-measures', CivicMeasures);
