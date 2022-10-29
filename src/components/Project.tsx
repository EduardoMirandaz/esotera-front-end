import {Download, GithubLogo} from "phosphor-react"
import noImage from '../assets/noImage.jpg'
import styles from './Project.module.css'
import { Student } from "./Student"

export function Project(props){
    return(
        <article className={styles.project}>
            <h2 className={styles.title}>{props.projectTitle}</h2>
            <div className={styles.content}>
                {props.image &&
                    <img className={styles.image} src={props.image}/>
                }
                {!props.image &&
                    <img className={styles.noImage} src={noImage}/>
                }
                <div className={styles.informations}>
                    <div className={styles.projectInformations}>
                        <p className={styles.description}>{props.description}</p>
                        <div className={styles.links}>
                            <div className={styles.download}>
                                <a href={props.downloadLink} target="_blank" download>
                                    <Download size={30}/>
                                </a>

                            </div>
                            {props.githubLink &&
                                <div className={styles.github}>
                                <a href={props.githubLink} target="_blank">
                                    <GithubLogo size={30}/>
                                </a>
                            </div>
                            }
                            
                        </div>
                    </div>
                    {props.students && 
                        <div className={styles.studentsInformations}>
                            <strong className={styles.studentTitle}>O projeto foi feito em {props.year} pelos estudantes:</strong>
                            <div className={styles.students}>
                                {props.students.map((student) => {
                                    return(
                                        <Student name={student.name} githubProfile={student.githubProfile}/>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </article>
    )
}