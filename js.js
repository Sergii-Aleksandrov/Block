let elems = document.querySelectorAll('.pane');
	for (let elem of elems) {
	  elem.insertAdjacentHTML('afterBegin', '<button class="remove-button">[x]</button>');
	};

	let buttons = document.querySelectorAll('.remove-button');
	for (let button of buttons) {
	  button.addEventListener('click', function() {
	  this.parentElement.remove();
	});
};