import { Project } from './Project'
import styles from './Subsection.module.css'

export function Subsection(props){
    return(
        <div className={styles.header}>
            <h1>{props.title}</h1>
            {props.projects.map((project) => {
                return(
                    <Project 
                        projectTitle={project.projectTitle}
                        image={project.image}
                        description={project.description}
                        downloadLink={project.downloadLink}
                        githubLink={project.githubLink}
                        year={project.year}
                        students={project.students}
                    />
                )
            })}
        </div>
    )
}