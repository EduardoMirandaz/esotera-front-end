import styles from './Content.module.css'

import {sections} from "../data.json"

import { Sidebar } from "./Sidebar"
import { Subsection } from "./Subsection"

export function Content(){
    return(
        <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {sections.map((section) => {
            return(
              <Subsection title={section.title} projects={section.projects}/>
            )
          })}
        </main>
      </div>
    )
}