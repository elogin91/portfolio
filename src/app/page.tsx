import fs from "fs";
import { join } from 'path';
import { serialize, } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { aboutMeData } from "./data/data";
import Image from "next/image";

export default async function AboutMePage() {

  return (
    <>
      <main className='flex flex-col items-center'>
        <section className='flex flex-row w-10/12 mt-10 mb-6 items-center'>
          <div className='w-1/3'>
            <Image
              priority={false}
              width={640}
              height={960}
              aria-label={"imagen de una cara"}
              alt={"imagen de una cara"}
              src={"/images/fondoComputer.jpg"}
              className='profileImage'
            />
          </div>
          <div>
            <h2>
              {aboutMeData.title}
            </h2>
            <p>
              {aboutMeData.body}
            </p>
          </div>
        </section>
        <p>
          {aboutMeData.highlightedBody}
        </p>
        <section>

        </section>
        <section>
          <div>
            <p>
              {aboutMeData.body2}
            </p>
          </div>
          <div>
            Image
          </div>
        </section>


      </main>
    </>
  )
}
