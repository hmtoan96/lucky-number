import { Avatar, Box, Flex, Text, Spacer } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import UserComponent from './UserComponent'

function RewardComponent({ fields }) {
  const { watch } = useFormContext()
  const selectId = watch('rewardSelect')
  return (
    <Flex justifyContent={'space-between'}>
      {fields.map((item, index) => {
        if (index === parseInt(selectId))
          return (
            <Box boxSize="sm">
              <Text>{item.name}</Text>
              <Avatar bg={'red'} size={'xl'} src={item.imageSrc} />
              <Flex flexDirection={'column'}>
                {item.employees.map((employee) => (
                  <UserComponent employee={employee} />
                ))}
              </Flex>
            </Box>
          )
      })}
    </Flex>
  )
}

export default RewardComponent
