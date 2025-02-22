import React from 'react'

const ExperienceTwo = () => {
    return (
        <div>
            <div className="flex justify-between items-start mb-1">
                <div>
                    <h3 className="font-bold text-gray-900">Full-Stack Developer(MERN)</h3>
                    <div className="text-gray-700">Fanfare Bangladesh Ltd.</div>
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
    )
}

export default ExperienceTwo