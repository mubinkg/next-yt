import React from 'react'

const Skills = () => {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS','JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Nest.js', 'GraphQL', 'Django', 'MongoDB', 'PostgreSQL','Docker', 'Scrum/Agile'].map((skill) => (
                    <span key={skill} className="bg-gray-100 px-2 py-1 text-sm text-gray-700 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Skills