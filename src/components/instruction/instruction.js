import React from "react"

import styles from "./instruction.module.scss"

import { FaAngleDoubleDown } from "react-icons/fa"
import { FaAngleDoubleUp } from "react-icons/fa"

import { Link } from "gatsby"

const Instruction = (props) => (
  
    <div id={props.id} className={styles.instruction_container}>
      <Link className={styles.arrow_up} to={"/#" + props.prevItem}>
        <FaAngleDoubleUp />
      </Link>
      <div>
        {props.children}
        {props.id}
      </div>
      <Link className={styles.arrow_down} to={"/#" + props.nextItem}>
        <FaAngleDoubleDown />
      </Link>
    </div>
  
)

export default Instruction
