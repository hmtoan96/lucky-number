import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import RewardComponent from './container/reward'
import CounterComponent from './container/counter'
import FunctionComponent from './container/function'
import './App.css'

const Wrapper = styled.div(``)
function App() {
  return (
    <div className="App">
      <Wrapper>
        <RewardComponent />
        <CounterComponent />
        <FunctionComponent />
      </Wrapper>
    </div>
  )
}

export default App
