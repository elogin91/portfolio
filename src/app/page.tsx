import fs from "fs";
import { join } from 'path';
import { serialize, } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <main className={""}>
        <h1>Welcome from Cristina Dev</h1>
        <h2>My portfolio</h2>
        <Link href="/about">Go to About Page</Link>
        <br />
        <Link href="/project">Go to Project Page</Link>

      </main>
    </>
  )
}
