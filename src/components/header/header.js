import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

import { FaAngleDoubleDown } from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <header className={styles.header_container}>
    <div className={styles.header_title}>
      <h1>{siteTitle}</h1>
      <FaAngleDoubleDown className={styles.arrow}/>
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
