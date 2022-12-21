import styled from '@emotion/styled'
import { Flex, Center, Text } from '@chakra-ui/react'

const SingleNumber = ({ children }) => {
  const CenterStyled = styled(Center)`
    padding: 10px 30px;
    color: white;
    font-weight: bold;
    border: 3px solid white;
    border-right: none;
    background-color: #cd2d2f;
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
  const numberArray =
    count === 0 ? [0, 0, 0, 0] : count.toString().padStart(4, '0').split('')
  return (
    <Flex justify="center" sx={{ marginBottom: '100px' }}>
      {numberArray.map((char) => (
        <SingleNumber>{char}</SingleNumber>
      ))}
    </Flex>
  )
}
