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
                    <div>June 2022 - Oct 2023</div>
                    <div>Nashville, TN</div>
                </div>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                <li>Develope admin panel for controlling ecommerce part of Fanfare applicaion.</li>
                <li>Work with next.js 12 and implement staic genration , revalidation and server side randering using server funcion.</li>
                <li>Worked with material ui for desing part and react-hook-form for form handling.</li>
                <li>Implement authentication with jwt and role based access control.</li>
                <li>Implement redux toolkit for state management and apollo client for graphql api data fetching.</li>
                <li>Using nest.js and graphql with apollo server for backend api.</li>
                <li>For database used mongodb and for ORM used mongoose.</li>
                <li>Optimized query performance by using complex aggregate and indexing.</li>
                <li>Implement multiprocessing using node cluster module and helped to deploy on aws using pm2 for multiple instance.</li>
                <li>Add firebase realtime database for circkert score and prediction game. Also implemnt fcm for notification.</li>
            </ul>
        </div>
    )
}

export default ExperienceTwo