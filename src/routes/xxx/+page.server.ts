export const prerender = false;

const messages = [
	'You fucking degenerate',
	"📸 You're on a list now",
	'You need to find jesus',
	'Bruh ...',
	'Why would you click on that bro get help'
];

export const load = () => {
	return {
		message: messages[~~(Math.random() * 10) % messages.length]
	};
};
