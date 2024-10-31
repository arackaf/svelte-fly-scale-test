const booksData = [
	{
		title: 'Building Microservices',
		description:
			"The title should really be \"A grownup's introduction to distributed systems\" and it's just that: the author covers the fundamentals of distributed systems, and more importantly, a serious discussion of microservices, where they fit well, and where they don't",
		img: 'microservices.jpg',
		link: 'https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1492034029?&linkCode=sl1&tag=zoomiec-20&linkId=5510e2946cab3bb61d36ec47a1e282de&language=en_US&ref_=as_li_ss_tl'
	},
	{
		title: 'Accelerate',
		description:
			'This book is a staple, and a must read for anyone looking to have a career in tech. It covers modern best practices of software engineering and dev ops, along with the data that helped inform them',
		img: 'accelerate.jpg',
		link: 'https://amzn.to/3UuqN9P'
	},
	{
		title: 'Crafting Interpreters',
		description:
			'A really, really cool book showing compiler fundamentals, but in an approachable, practical way. Bob Nystrom is one of the best authors around. He walks you through two compiler implementations, one in Java, the other in C. Be sure to also check out his Game Programming Patterns',
		img: 'crafting_interpreters.jpg',
		link: 'https://www.amazon.com/Crafting-Interpreters-Robert-Nystrom/dp/0990582930?crid=1XDLWJDCPW8AF&dib=eyJ2IjoiMSJ9.ZO7Jscf8AVSGgaY0lk3GoeM2m4pSFmOIQZHd8yfvVE_fz59EFkgNz3H8ioMu7cHmHroOQxvZZTlssKETEK0bfUy9tOCudbg9aGe9D0_gT5S6ZEKw3YS2Cu7Xd2lxBuzOFkxVcbCBrS9z6J-DRb_K5qIBkNxfNyMR_2BbD0wemb1NkzUY9ucNBBepOBr5ReMRwU7yBhgcKbTtHc2VcWdqew.M1wUnU0hzCAWGxNIzIZj8er-szVTzHG7qTFbRvQ08k8&dib_tag=se&keywords=Crafting+Interpreters&qid=1730400592&s=books&sprefix=,stripbooks,110&sr=1-1&linkCode=sl1&tag=zoomiec-20&linkId=08037174e955ab4d80cf37cb64a61163&language=en_US&ref_=as_li_ss_tl'
	},
	{
		title: 'Data Oriented Design',
		description:
			"One of the most interesting books I've read. Forget OOP pablum; this dives into data modeling for when performance actually matters. Think GameDev, not WebDev",
		img: 'data_oriented.jpg',
		link: 'https://www.amazon.com/Data-oriented-design-engineering-resources-schedules/dp/1916478700?&linkCode=sl1&tag=zoomiec-20&linkId=602880959044e296890d47ed006b8f9f&language=en_US&ref_=as_li_ss_tl'
	}
];

export const load = () => {
	return {
		books: booksData
	};
};
