import { aboutMeData } from "./data/data";
import Image from "next/image";

export default async function AboutMePage() {

  return (
    <>
      <div className='flex flex-col items-center '>
        <section className='flex sm:flex-row sm:w-10/12 items-center flex-col w-full '>
          <div className='sm:w-1/3 w-full flex justify-center mt-12'>
            <Image
              priority={false}
              width={240}
              height={400}
              aria-label={"imagen de una cara"}
              alt={"imagen de una cara"}
              src={"/images/photo.JPG"}
              className='profileImage'
            />
          </div>
          <div className='sm:ml-20 sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10'>
            <h2>
              {aboutMeData.title}
            </h2>
            <p>
              {aboutMeData.body}
            </p>
          </div>
        </section >

        <section className='w-full bg-puce p-10 h-full'>
          <p>
            {aboutMeData.highlightedBody}
          </p>
        </section>

        <section className='flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col'>
          <div className='flex flex-col  w-full mb-10 sm:mb-0 sm:w-7/12'>
            <p>
              {aboutMeData.body2}
            </p>
          </div>
          <div className='sm:w-3/12 sm:ml-10 w-full ml-0'>
            <Image
              priority={true}
              width={500}
              height={250}
              aria-label={"image computer"}
              alt={"image computer"}
              src={"/images/fondoComputer.jpg"}
              className='h-250 object-cover w-500'
            />
          </div>
        </section>
      </div>
    </>
  )
}
