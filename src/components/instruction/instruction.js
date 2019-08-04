import React from "react"

import styles from "./instruction.module.scss"

import { FaAngleDoubleDown } from "react-icons/fa"
import { FaAngleDoubleUp } from "react-icons/fa"

import { Link } from "gatsby"

const Instruction = props => (
  <div id={props.id} className={styles.instruction_container}>
    <Link to={"/#" + props.prevItem}>
      <FaAngleDoubleUp className={styles.arrow_up} />
    </Link>
    <div>{props.children}</div>

    <Link style={{ visibility: props.nextItem ? 'visible': 'hidden'}} to={"/#" + props.nextItem}>
      <FaAngleDoubleDown className={styles.arrow_down} />
    </Link>

  </div>
)

export default Instruction
