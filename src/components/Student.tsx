import styles from './Student.module.css'


export function Student(props){
    return(
        <div className={styles.student}>
            {props.githubProfile && 
                <a href={props.githubProfile} target="_blank">{props.name}</a>
            }
            {!props.githubProfile && 
                <a target="_blank">{props.name}</a>
            }
        </div>
    )
}