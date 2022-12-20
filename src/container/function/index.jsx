import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'

export default function FunctionComponent({ setRewardRange }) {
  return (
    <Box>
      <Button
        onClick={() =>
          setRewardRange(faker.datatype.number({ min: 10, max: 100 }))
        }
      >
        Quay số
      </Button>
    </Box>
  )
}
