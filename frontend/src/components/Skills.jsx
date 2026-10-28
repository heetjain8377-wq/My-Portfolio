import React from 'react'

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git & Github"]

const Skills = () => {

    return (
        <section id='skills' className='skills'>
            <h2>Skills</h2>

            <span className='skills-list'>
                {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </span>
        </section>
    )
}

export default Skills
