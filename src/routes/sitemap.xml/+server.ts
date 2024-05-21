import { personalProjects } from '$lib/components/project/personalProjectData';
import { schoolProjects } from '$lib/components/course/schoolProjectData';

const site = 'https://yongyetan.com';
const pages: string[] = [];

const generateDyanmicRoutes = () => {

    pages.push('course');

    const peronalProjectNames = personalProjects.map((p) => p.name);
    peronalProjectNames.forEach((name) => pages.push(`project/personal/${name}`));

    let index = 0;
    const semesters = ["Fall2021", "Spring2022", "Summer2022", "Fall2022", "Spring2023", "Summer2023", "Fall2023", "Spring2024"];
    schoolProjects.forEach((semester) => {
        semester.forEach((course) => {
            pages.push('project/school/' + semesters[index] + '/' + course.name + "/README.md");
        })
        index++;
    })
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
<url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>1</priority>
</url>

${pages.map((page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
  `
).join('')}
</urlset>`;

// Reference: https://sveltekit.io/blog/svelte-sitemaps
// https://sveltekit.io/blog/svelte-sitemaps
export async function GET() {

    generateDyanmicRoutes();
    const body = sitemap(pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}