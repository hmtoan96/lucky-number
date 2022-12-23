import React, { useState, useEffect, useRef } from 'react'
import { faker } from '@faker-js/faker'
import { useFormContext } from 'react-hook-form'
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Avatar,
  Text,
  Center,
  Flex,
  Card,
  CardBody,
  CardFooter,
  Image,
  Select,
} from '@chakra-ui/react'
import NumberComponent from './NumberComponent'

function CounterComponent(props) {
  const refCounter = useRef(0)
  const { addNewEmployee } = props
  const [count, setCount] = useState(0)
  const [isRolling, setRolling] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  let counter = refCounter.current

  const listEmployee = {
    1: { id: 1, name: 'Rolando Mitchell', department: 'IT' },
  }

  const rolling = () => {
    const range = faker.datatype.number({ min: 15, max: 100 })
    setRolling(true)
    const intervalId = setInterval(() => {
      if (counter < 10) {
        counter++
        setCount(faker.datatype.number({ min: 0, max: 1200 }))
      }
      if (counter >= 10) {
        setTimeout(() => {
          onOpen()
          setRolling(false)
        }, 1000)
        clearInterval(intervalId)
      }
    }, 100)
  }

  const handleOnClickAccept = () => {
    onClose()
    addNewEmployee(1)
  }

  const { register } = useFormContext()

  const resetImageSrc = () => {
    console.log('image error')
  }

  const rewardData = [
    {
      label: 'Giải may mắn lần 1',
      value: 4,
    },
    {
      label: 'Giải may mắn lần 2',
      value: 5,
    },
    {
      label: 'Giải ba',
      value: 3,
    },
    {
      label: 'Giải nhì',
      value: 2,
    },
    {
      label: 'Giải nhất',
      value: 1,
    },
    {
      label: 'Giải đặc biệt',
      value: 0,
    },
  ]
  return (
    <>
      <Flex direction={'column'} alignItems="center">
        <NumberComponent count={count.toString().padStart(4, '0')} />
        <Flex sx={{ gap: '20px' }} alignItems="center">
          <Select
            width={'500px'}
            sx={{
              borderWidth: '2px',
              backgroundColor: '#e53e3ebf',
              fontSize: '30px',
              padding: '0 10px',
              height: '70px',
            }}
            color="white"
            placeholder="Lựa chọn giải"
            {...register('rewardSelect')}
          >
            {rewardData.map((reward) => (
              <option style={{ color: 'black' }} value={reward.value}>
                {reward.label}
              </option>
            ))}
          </Select>
          <Button
            sx={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              fontSize: '40px',
              color: 'white',
              backgroundColor: '#e53e3ebf',
              boxShadow: '1px -2px 20px 8px',
              marginTop: '30px',
              textTransform: 'uppercase',
              border: '5px solid white',
            }}
            onClick={() => rolling()}
            disabled={isRolling}
          >
            Quay
          </Button>
        </Flex>
      </Flex>

      <Modal size={'lg'} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Xác nhận trúng giải</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={`/img/anhnv/${count.toString().padStart(4, '0')}.JPG`}
                onError={() => resetImageSrc()}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Stack>
                    <Text>ID: {listEmployee[1].id}</Text>
                    <Text>Name: {listEmployee[1].name}</Text>
                    <Text>Department: {listEmployee[1].department}</Text>
                    <Text>Xin chúc mừng nhân viên!</Text>
                  </Stack>
                </CardBody>
              </Stack>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleOnClickAccept}>
              Đồng ý
            </Button>
            <Button onClick={onClose}>Hủy bỏ</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CounterComponent
