/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from 'kajoo-components/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Component.module.css'

const AppComponent = (props) => {
  return (
    <Container className={` ${styles['root']} ${styles[props.rootClassName]} `}>
      <Container
        className={` ${styles['container']} ${styles['container-default']} `}
      >
        <Text
          text={props.text}
          tag="span"
          className={` ${styles['text']} ${styles['paragraph-default']} `}
        />
        <Text
          text={props.text1}
          tag="h1"
          className={` ${styles['text1']} ${styles['header-default']} `}
        />
      </Container>
    </Container>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  text1: 'Heading',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
