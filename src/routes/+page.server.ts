import { env } from '$env/dynamic/private';
const { VALUE } = env;

export const load = async () => {
	return {
		message: VALUE
	};
};
