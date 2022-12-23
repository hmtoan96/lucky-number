import { Avatar, Box, Flex, Text, Spacer } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import UserComponent from './UserComponent'

function RewardComponent({ fields }) {
  const { watch } = useFormContext()
  const selectId = watch('rewardSelect')
  return (
    <Flex
      justifyContent={'space-between'}
      sx={{ maxWidth: '1000px', margin: '0 auto' }}
      direction={'column'}
    >
      {fields.map((item, index) => {
        if (index === parseInt(selectId))
          return (
            <Flex direction={'column'} alignItems={'center'}>
              <Flex
                direction={'column'}
                sx={{ padding: '10px 30px', gap: '10px' }}
                alignItems={'center'}
              >
                <Text
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '35px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
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
