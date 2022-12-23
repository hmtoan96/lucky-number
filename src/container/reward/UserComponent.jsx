import React from 'react'
import { Avatar, Flex, Spacer, Text } from '@chakra-ui/react'

export default function UserComponent(props) {
  const { imgSrc, name, id } = props.employee
  return (
    <Flex alignItems="center" sx={{ gap: '10px' }}>
      <Avatar size="lg" src={imgSrc} />
      <Text sx={{ color: 'white', fontWeight: 'semi-bold', fontSize: '30px' }}>
        {name}
      </Text>
      <Spacer />
    </Flex>
  )
}
