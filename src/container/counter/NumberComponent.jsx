import styled from '@emotion/styled'
import { Flex, Center, Text } from '@chakra-ui/react'

const SingleNumber = ({ children }) => {
  const CenterStyled = styled(Center)`
    padding: 10px 30px;
    color: white;
    font-weight: bold;
    border: 3px solid white;
    border-right: none;
    background-color: #e53e3ebf;
    &:last-child {
      border-right: 3px solid white;
    }
  `

  const TextStyled = styled(Text)`
    font-size: 200px;
    line-height: 200px;
    display: flex;
    align-items: center;
  `
  return (
    <CenterStyled>
      <TextStyled>{children}</TextStyled>
    </CenterStyled>
  )
}

export default function NumberComponent({ count = '' }) {
  const numberArray = count.split('')
  return (
    <Flex justify="center">
      {numberArray.map((char) => (
        <SingleNumber>{char}</SingleNumber>
      ))}
    </Flex>
  )
}
