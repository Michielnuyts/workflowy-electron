// @flow
import React, { Component } from 'react'
import Home from '../components/Home'
import styled from 'styled-components'

export default class HomePage extends Component {
	render() {
		return (
			<Container>
				<Home />
			</Container>
		)
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: tomato;
  height: 100vh;
`
