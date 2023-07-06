import fs from "fs";
import { join } from 'path';
import { serialize, } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { ProjectCard, ProjectCardType } from "../components/projectCard";

const projectsDirectory = join(process.cwd(), '/projects')

async function getFirstProjectsInfo() {
    const directoryContent = fs.readdirSync(projectsDirectory)

    return Promise.all(directoryContent.map(p => getProjectFronmatter(p)))
}

async function getProjectFronmatter(projectPath: string) {
    const source = fs.readFileSync(
        join(projectsDirectory, projectPath),
        'utf8'
    );
    return serialize<Record<string, unknown>, ProjectCardType>(source, { parseFrontmatter: true });
}

export default async function ProjectsPage() {
    const projects = await getFirstProjectsInfo();


    return (<>
        <div className="flex flex-col w11/12 content-center m-auto mt-10 ml-10">
            <h2 className="text-2xl font-bold mb-4">My projects</h2>

            <div className="flex flex-row flex-wrap gap-10 mt-6">

                {projects.map((p) => {
                    return (
                        <ProjectCard data={p.frontmatter} />
                    );
                })}
            </div>
        </div>
    </>
    )
}
