import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { personalProjects } from '$lib/components/project/personal/personalProjectData';

export const load: PageServerLoad = ({ params }) => {
	const name = params.name;
	const data = personalProjects.find((x) => x.name === name);

	if (!data) {
		error(404, 'Not found');
	}

	return data;
};
