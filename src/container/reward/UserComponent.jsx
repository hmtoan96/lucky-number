import React from 'react'
import { Avatar, Flex, Spacer, Text } from '@chakra-ui/react'

export default function UserComponent(props) {
  const { imgSrc, name, id } = props.employee
  return (
    <Flex alignItems="center" sx={{ gap: '10px' }}>
      <Avatar src={imgSrc} />
      <Text>{name}</Text>
      <Spacer />
      <Text>{id}</Text>
    </Flex>
  )
}
