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
  Select,
  Flex,
  Box,
} from '@chakra-ui/react'
import NumberComponent from './NumberComponent'

function CounterComponent(props) {
  const refCounter = useRef(0)
  const { addNewEmployee } = props
  const [count, setCount] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  let counter = refCounter.current

  const listEmployee = {
    1: { id: 1, name: 'Rolando Mitchell', department: 'IT' },
  }

  const rolling = () => {
    const range = faker.datatype.number({ min: 15, max: 100 })
    const intervalId = setInterval(() => {
      if (counter < 10) {
        counter++
        setCount(faker.datatype.number({ min: 0, max: 1200 }))
      }
      if (counter >= 10) {
        setTimeout(() => {
          onOpen()
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
  console.log(count)
  return (
    <>
      <Flex direction={'column'} alignItems="center">
        <NumberComponent count={count} />
        <Select {...register('rewardSelect')} placeholder="Lựa chọn giải">
          <option value={0}>Giải đặc biệt</option>
          <option value={1}>Giải nhất</option>
          <option value={2}>Giải nhì</option>
          <option value={3}>Giải ba</option>
          <option value={4}>Giải may mắn lần 1</option>
          <option value={5}>Giải may mắn lần 2</option>
        </Select>
        <Button
          sx={{ width: '80px', height: '80px', borderRadius: '50%' }}
          onClick={() => rolling()}
        >
          Quay số
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Xác nhận trúng giải</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Center>
                <Avatar
                  size="xl"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </Center>
              <Stack>
                <Text>ID: {listEmployee[1].id}</Text>
                <Text>Name: {listEmployee[1].name}</Text>
                <Text>Department: {listEmployee[1].department}</Text>
                <Text>Xin chúc mừng nhân viên!</Text>
              </Stack>
            </Stack>
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
