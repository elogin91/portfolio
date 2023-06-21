import fs from "fs";
import { join } from 'path'
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote";

const projectsDirectory = join(process.cwd(), '/projects')

function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory)
}

async function getFirstProjectsInfo(){
  const directoryContent = fs.readdirSync(projectsDirectory)

  return Promise.all(directoryContent.map( p => getProjectFronmatter(p)))
}

async function getProjectFronmatter(projectPath: string) {
  const source = fs.readFileSync(
    join(projectsDirectory, projectPath),
    'utf8'
  );

  return serialize<Record<string, unknown>, Record<string, "name" | "technologies" | "date">>(source, { parseFrontmatter: true });
}

export default async function Home() {
  const projects = await getFirstProjectsInfo();


  return (<>
  <h1>Welcome from Cristina Dev</h1>
  <h2>My portfolio</h2>


    <h3>Develop Projects</h3>

    <ul>
      {projects.map((p) => {
        return (
          <li key={p.frontmatter.name}>
            Nombre: {p.frontmatter.name} <br />
            Tecnologías: {p.frontmatter.technologies} <br />
            Fecha: {p.frontmatter.date} <br />
          </li>

        );
      })}
    </ul>

  </>
  )
}
