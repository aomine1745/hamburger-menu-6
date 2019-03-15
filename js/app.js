const btn = document.querySelector('.btn-toggle');
let btnClass = 'open';

btn.addEventListener("click", () => {
	if (btn.classList.contains('open')) {
		btn.classList.remove(btnClass);
		btnClass = 'close';
	} else if (btn.classList.contains('close')) {
		btn.classList.remove(btnClass);
		btnClass = 'open';
	}

	void btn.offsetWidth;
	btn.classList.add(btnClass);
});