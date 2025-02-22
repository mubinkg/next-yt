'use client'

export default function page() {
    return (
      <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8">
        <div className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">ALEKS LUDKEE</h1>
            <h2 className="text-xl text-gray-700">Full-Stack Developer</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="mailto:a.ludkee@email.com" className="hover:text-blue-600">a.ludkee@email.com</a>
              <span>(123) 456-7890</span>
              <span>Nashville, TN</span>
            </div>
            <div className="flex gap-4 text-sm text-blue-600">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Github</a>
            </div>
          </header>
  
          {/* Work Experience */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">WORK EXPERIENCE</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-gray-900">Full-Stack Developer</h3>
                    <div className="text-gray-700">Deloitte</div>
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    <div>August 2020 - current</div>
                    <div>Nashville, TN</div>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                  <li>Designed, developed, and modified 25+ software systems and custom components</li>
                  <li>Developed 30+ new software solutions by analyzing system performance standards</li>
                  <li>Analyzed systems flow, data usage, and work processes; investigated 100% of problem areas</li>
                  <li>Integrated existing software into 13 upgraded, modified systems for higher performance</li>
                  <li>Developed and executed 200+ test procedures for software components</li>
                  <li>Analyzed 30+ user requirements to derive technical software design and performance requirements</li>
                  <li>Planned, tracked, and managed deliverables on 200+ short-term sprints and 50+ long-term deployments</li>
                </ul>
              </div>
  
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-gray-900">Jr. Full-Stack Developer</h3>
                    <div className="text-gray-700">Randstad Technologies</div>
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    <div>June 2019 - August 2020</div>
                    <div>Nashville, TN</div>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                  <li>Developed code following common security practices and development design patterns</li>
                  <li>Wrote 200+ unit tests to verify the functionality of user interfaces, back-end processing, connectivity, and relational database interactions</li>
                  <li>Maintained 8+ systems and applications as Tier 2 support (break-fix and data changes)</li>
                  <li>Documented 100% of technical specifications and dependencies of applications</li>
                  <li>Participated in the planning and execution of 10+ business continuity/disaster recovery exercises</li>
                  <li>Implemented 25+ system and application designs</li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Two Column Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4">EDUCATION</h2>
              <div>
                <div className="font-bold text-gray-900">B.S. Computer Science</div>
                <div className="text-gray-700">University of Tennessee</div>
                <div className="text-sm text-gray-600">September 2015 - June 2019</div>
                <div className="text-sm text-gray-600">Knoxville, TN</div>
              </div>
            </section>
  
            {/* Skills and Certifications */}
            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-2">SKILLS</h2>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML', 'CSS', '.NET', 'React.js', 'Angular.js', 'Node.js', 'Rest APIs', 'Spring', 'SOAP', 'Scrum/Agile'].map((skill) => (
                    <span key={skill} className="bg-gray-100 px-2 py-1 text-sm text-gray-700 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
  
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-2">CERTIFICATIONS</h2>
                <div className="space-y-1 text-gray-700">
                  <div>MTA</div>
                  <div>AWS</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }