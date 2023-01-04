import React, { useState, useEffect, useRef } from 'react'
import { faker } from '@faker-js/faker'
import styled from '@emotion/styled'
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
  Text,
  Flex,
  Card,
  CardBody,
  Image,
  Select,
} from '@chakra-ui/react'
import { dataID } from '/src/data'
import NumberComponent from './NumberComponent'

const StyledText = styled(Text)`
  font-weight: bold;
  span {
    font-weight: normal;
  }
`

const ImageComponent = ({ userID }) => {
  const [imgSrc, setImgSrc] = useState(`/img/anhnv/${userID}.JPG`)
  const resetImageSrc = () => {
    setImgSrc(`/img/anhnv/${userID}.PNG`)
  }
  useEffect(() => {
    setImgSrc(`/img/anhnv/${userID}.JPG`)
  }, [])

  return (
    <Image
      objectFit="cover"
      w={250}
      height={300}
      src={imgSrc}
      onError={resetImageSrc}
      alt="Employee"
    />
  )
}

function CounterComponent(props) {
  const refCounter = useRef(0)
  const { addNewEmployee, users } = props
  const [count, setCount] = useState(0)
  const [isRolling, setRolling] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonRef = useRef(null)

  let counter = refCounter.current
  const countId = count.toString().padStart(4, '0')
  const rolling = () => {
    const range = faker.datatype.number({ min: 15, max: 50 })
    setRolling(true)
    const intervalId = setInterval(() => {
      if (counter < range) {
        counter++
        setCount(dataID[Math.floor(Math.random() * dataID.length)])
      }
      if (counter >= range) {
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
    addNewEmployee(countId)
  }

  const { register, watch } = useFormContext()
  const selectId = watch('rewardSelect')

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
      <Flex sx={{ gap: '20px' }} direction={'column'} alignItems="center">
        <Flex sx={{ gap: '20px' }}>
          <NumberComponent count={count.toString().padStart(4, '0')} />
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
            disabled={isRolling || selectId === ''}
          >
            Quay
          </Button>
        </Flex>
        <Flex sx={{ gap: '20px' }} alignItems="center">
          <Select
            width={'940px'}
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
        </Flex>
      </Flex>

      <Modal
        finalFocusRef={buttonRef}
        size={'xl'}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
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
              <ImageComponent userID={countId} />

              <Stack>
                <CardBody>
                  <Stack>
                    <StyledText>
                      ID: <span>{users[countId]?.id}</span>
                    </StyledText>
                    <StyledText>
                      Name: <span>{users[countId]?.name}</span>
                    </StyledText>
                    <StyledText>
                      Department: <span>{users[countId]?.department}</span>
                    </StyledText>
                  </Stack>
                </CardBody>
              </Stack>
            </Card>
            <Text>Xin chúc mừng nhân viên!</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              ref={buttonRef}
              colorScheme="blue"
              mr={3}
              onClick={handleOnClickAccept}
            >
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
