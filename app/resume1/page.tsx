'use client'

import Image from "next/image"
import Education from "../_components/Education"
import Skills from "../_components/Skills"
import Certificate from "../_components/Certificate"
import ExperienceOne from "../_components/ExperienceOne"
import ExperienceTwo from "../_components/ExperienceTwo"

export default function page() {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8">
      <div className="space-y-6">
        <header className="space-y-2 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">MUBIN MOHAMMAD IKHTIAR KHAN</h1>
            <h2 className="text-xl text-gray-700">Full-Stack Developer</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="mailto:mubin.ice.ru@gmail.com" className="hover:text-blue-600">Email: mubin.ice.ru@gmail.com</a>
              <p>Phone: +8801790186490</p>
            </div>
            <p className="gap-4 text-sm text-gray-600">Address : West Manikdi, Dhaka Cantonment, Dhaka, Bangladesh</p>
            <div className="flex gap-4 text-sm text-blue-600">
              <a href="https://www.linkedin.com/in/mubin-ice-ru/" className="hover:underline">LinkedIn : https://www.linkedin.com/in/mubin-ice-ru/</a>
              <a href="https://github.com/mubinkg" className="hover:underline">Github : https://github.com/mubinkg</a>
            </div>
          </div>
          <div>
            <Image src="/profile.png" alt="profile" width={100} height={100} className="rounded-md" />
          </div>
        </header>
        <div className="flex justify-between gap-8">
          <div className="w-8/12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">WORK EXPERIENCE</h2>
            <div className="space-y-4 flex flex-col">
              <ExperienceOne/>
              <ExperienceTwo/>
            </div>
          </div>
          <div className="w-4/12">
            <div className="flex flex-col gap-4">
              <Education />
              <Skills />
              <Certificate />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}