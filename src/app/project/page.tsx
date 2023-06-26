import fs from "fs";
import { join } from 'path'
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote";
import { todo } from "node:test";

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

export default async function Projects() {
  const projects = await getFirstProjectsInfo();
  const res = await fetch('https://...')
  const markdown = await res.text()

  return(

    //toDo
    <div className="wrapper">
     <MDXRemote compiledSource={""} scope={undefined} frontmatter={undefined} {...res} />
    </div>
  )
}