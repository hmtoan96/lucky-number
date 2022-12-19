import React, { useState, useEffect, useRef } from 'react'
import { faker } from '@faker-js/faker'
import { useDisclosure } from '@chakra-ui/react'

function CounterComponent({ text }) {
  const refCounter = useRef(0)
  const [count, setCount] = useState(0)
  let counter = refCounter.current
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter <= 100) {
        console.log(faker.datatype.number({ min: 0, max: 1200 }))
        counter++
        setCount(faker.datatype.number({ min: 0, max: 1200 }))
      }
    }, 100)
    return () => {
      clearInterval(intervalId)
    }
  }, [text])

  return <h1>{count}</h1>
}

export default CounterComponent
