// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.css'
import styled from 'styled-components'

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Heading contentEditable>
					You are a great Developer!
				</Heading>
			</Container>
		)
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: tomato;
`

const Heading = styled.h1`
	font-size: 2rem;
	color: tomato;
	font-weight: bold;
	text-tranform: uppercase;
	background-color: cornsilk;
	padding: 2rem;
	border: 3px solid white;
	border-radius: 1rem;
	margin-top: 1rem;
`
