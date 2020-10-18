window.addEventListener('keydown', function(e) {
	// console.log(e);
	const voice = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// console.log(voice);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // need this so as to apply the animation defined within the css
	if (!voice) return; // if there is no voice producing element associated, stop the function from running all together
	voice.currentTime = 0;
	voice.play();
	key.classList.add('playing');
});

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // if it's not transform, skip it
	this.classList.remove('playing');
}
const allKeys = document.querySelectorAll('.key');

allKeys.forEach((key) => key.addEventListener('transitionend', removeTransition));
