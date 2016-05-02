// DOM event helpers
const Event = (ev, mod = x => x) =>
	el => mod(el.events(ev));

// Input(DOM.select('.some-input'))
const Input = Event('input');
// Button(DOM.select('.some-button'))
const Button = Event('click');

export {
	Event,
	Input,
	Button
}
