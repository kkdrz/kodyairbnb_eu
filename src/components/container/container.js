import React from "react"

import styles from "./container.module.scss"
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Container
