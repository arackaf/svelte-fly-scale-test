const booksData = [
	{
		title: 'Building Microservices',
		description:
			"The title should really be 'A grownup's introduction to distributed systems' and it's just that: the author covers the fundamentals of distributed systems, and more importantly, a serious discussion of micro services, where they fit well, and where they don't",
		img: 'microservices.jpg'
	},
	{
		title: 'Accelerate',
		description:
			'A must read for anyone looking to have a serious career as a software engineer. Modern best practices of software engineering and dev ops, along with the data that helped inform them',
		img: 'accelerate.jpg'
	},
	{
		title: 'Crafting Interpreters',
		description:
			'A really, really cool book showing compiler fundamentals, but in an approachable, practical way. Bob Nystrom is one of the best authors around. He walks you through two compiler implementations, one in Java, the other in C. Be sure to also check out his Game Programming Patterns book',
		img: 'crafting_interpreters.jpg'
	},
	{
		title: 'Data Oriented Design',
		description:
			"One of the most interesting books I've read. Forget OOP pablum; this dives into data modeling for software for which performance actually matters. Think GameDev, not WebDev",
		img: 'data_oriented.jpg'
	}
];

export const load = () => {
	return {
		books: booksData
	};
};
