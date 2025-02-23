import React from 'react'

const ExperienceOne = () => {
    return (
        <div>
            <div className="flex justify-between items-start mb-1">
                <div>
                    <h3 className="font-bold text-gray-900">Software Engineer</h3>
                    <div className="text-gray-700">Upay(Ucb Fintech Company Ltd.)</div>
                </div>
                <div className="text-right text-gray-600 text-sm">
                    <div>November 2023 - current</div>
                    <div>Gulshan-1, Dhaka</div>
                </div>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-0.5">
                <li>Working on multiple financial portals and backoffice systems(Uclick, Uclick Backoffice, Finance, EKyc, B2b, Corporate, Automation Portal, Payment Gateway etc.)</li>
                <li>In uclick portals worked with next.js app router, fully typescript support, schadcn, tailwindcss and tanstack stack</li>
                <li>Implement lazy loading, server actions, partial pre-rendering, and static generation to improve performance and reduce bundle size.</li>
                <li>Also consider on reduce roundtrip time and improve user experience. Implement prefetching and streaming for complex dashboards.</li>
                <li>Add authentication with jwt, role based access control, and refresh token.</li>
                <li>Implemnt some security policy like xss, clickjacking, csrf, etc.</li>
                <li>All other portals are developed in react.js with JavaScript, redux, sagas.</li>
                <li>Here i improved code quality and fixing bugs also improve performance of the code by using memoization and caching.</li>
                <li>Build docker imgae for all portals and help to deploy on kubernetes cluster with devops team.</li>
                <li>Worked in corporate, b2b backend using django rest framework and postgresql.</li>
                <li>Implement corporate salary in bulk for thoused of people at time using celery.</li>
            </ul>
        </div>
    )
}

export default ExperienceOne