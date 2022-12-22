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
            <Flex alignItems={'center'} sx={{ marginTop: '50px' }}>
              <Flex
                direction={'column'}
                sx={{ padding: '10px 30px', gap: '10px' }}
              >
                <Text
                  sx={{ fontSize: '20px', color: 'red', fontWeight: 'bold' }}
                >
                  {item.name}
                </Text>
                <Avatar bg={'red'} size={'2xl'} src={item.imageSrc} />
              </Flex>
              <Flex sx={{ gap: '20px' }}>
                {item.employees.map((employee) => (
                  <UserComponent employee={employee} />
                ))}
              </Flex>
            </Flex>
          )
      })}
    </Flex>
  )
}

export default RewardComponent
