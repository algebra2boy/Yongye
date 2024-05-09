import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import type { PersonalProjectName, PersonalProject } from '$lib/components/project';

import { personalProjects } from '$lib/components/project/personal/personalProjectData';
import { readme } from '$lib/components/project/personal/readme';

export const load: PageLoad = ({ params }) => {
	const name = params.name;
	const data = personalProjects.find((x) => x.name === name) as PersonalProject;

	if (!data) {
		error(404, 'Not found');
	}

	data.readme = readme[name as PersonalProjectName];

	return data;
};
