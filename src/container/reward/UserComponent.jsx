import React, { useState } from 'react'
import { Avatar, Flex, Spacer, Text } from '@chakra-ui/react'

export default function UserComponent(props) {
  const { name, id } = props.employee
  console.log(props.employee)
  const [imgSrc, setImgSrc] = useState(
    `/img/anhnv/${id.toString().padStart(4, '0')}.PNG`
  )

  const getImageSource = () => {
    setImgSrc(`/img/anhnv/${id.toString().padStart(4, '0')}.JPG`)
  }

  return (
    <Flex
      alignItems="center"
      sx={{
        gap: '10px',
        overflow: 'hidden',
        border: '2px solid white',
        borderRadius: '25px',
        padding: '10px',
        backgroundColor: '#e53e3e',
      }}
    >
      <Avatar size="lg" src={imgSrc} onError={getImageSource} />
      <Text
        sx={{
          color: 'white',
          fontWeight: 'semi-bold',
          fontSize: '30px',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </Text>
      <Text
        sx={{
          color: 'white',
          fontWeight: 'semi-bold',
          fontSize: '30px',
          whiteSpace: 'nowrap',
          marginLeft: '10px',
        }}
      >
        {id}
      </Text>
    </Flex>
  )
}
