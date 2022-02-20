(function() {
	for(const prev_box of document.body.querySelectorAll(".url_box")) {
		document.body.removeChild(prev_box);
	}

	const selector = "#player > div.cs-player.flow-root > div.player-controls.flow-root > div.section1 > div.pageviews-container > dl > dd > ul > li > span.ng-binding";

	var urls = [];

	const pageviewElements = document.querySelectorAll(selector);

	if(pageviewElements === undefined || pageviewElements.length === 0) { return; }
	
	for(const i of pageviewElements) {
		const url = i.getAttribute("data-tippy-content").split(" - ")[1];
		if(url === undefined) { continue; }
		urls.push(url)
	}

	let box = document.createElement("div");
	box.setAttribute("class", "url_box");
	box.style = `
		border: solid 3px #e65d0e;
		position: fixed;
		top: 0;
		right: 0;
		max-width: 100%;
		white-space: nowrap;
		background-color: #282828;
		color: #ebdbb2;
		text-align: left;
		font-weight: 900;
	`;

	let topbar = document.createElement("div");
	topbar.style = `
		display: flex;
		flex-direction: row;
		padding: 0.2em;
		background-color: #3c3836;
	`;

	let title = document.createElement("h3");
	title.innerHTML = "Replay URLs";
	title.style = "margin-right: auto; margin-block: auto;";

	let close = document.createElement("button");
	close.innerHTML = "X";
	close.style = `
		border: solid 2px #e65d0e;
		border-radius: 0px;
		padding: 0.3em;
		font-weight: 900;
		color: #ebdbb2;
		background-color: #282828;
	`;
	close.onclick = function () {
		for(const prev_box of document.body.querySelectorAll(".url_box")) {
			document.body.removeChild(prev_box);
		}
	}

	for(const elem of [title, close]) {
		topbar.appendChild(elem);
	}
	
	box.appendChild(topbar);

	let list = document.createElement("ol");
	list.style = `
		display: flex;
		flex-direction: column;
		gap: 0.3em;
		padding: 2em;
		overflow-x: auto;
	`;
	box.appendChild(list);
	
	for(const url of urls) {
		let item = document.createElement("li");
		item.style = "user-select: all;";
		item.innerHTML += url;
		list.appendChild(item);
	}
	
	document.body.appendChild(box);
})();
