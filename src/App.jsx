import styled from '@emotion/styled'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import { Button } from '@chakra-ui/react'
import { produce } from 'immer'
import goldUrl from './assets/images/special-reward.png'
import backgroundUrl from './assets/images/background-image.png'
import RewardComponent from './container/reward'
import CounterComponent from './container/counter'
import './App.css'

const Wrapper = styled.div(``)
function App() {
  const methods = useForm({
    defaultValues: {
      listReward: [
        {
          name: 'Giải đặc biệt',
          employees: [
            {
              name: 'Hoang Minh Toan',
              id: 1,
              imgSrc: 'https://bit.ly/dan-abramov',
            },
          ],
          imageSrc: goldUrl,
        },
        {
          name: 'Giải nhất',
          employees: [
            {
              name: 'Hoang Minh Toan',
              id: 1,
              imgSrc: 'https://bit.ly/dan-abramov',
            },
          ],
          imageSrc: goldUrl,
        },
        {
          name: 'Giải nhì',
          employees: [
            {
              name: 'Hoang Minh Toan',
              id: 1,
              imgSrc: 'https://bit.ly/dan-abramov',
            },
          ],
          imageSrc: goldUrl,
        },
        {
          name: 'Giải ba',
          employees: [
            {
              name: 'Hoang Minh Toan',
              id: 1,
              imgSrc: 'https://bit.ly/dan-abramov',
            },
          ],
          imageSrc: goldUrl,
        },
        {
          name: 'Giải may mắn 1',
          employees: [
            {
              name: 'Hoang Minh Toan',
              id: 1,
              imgSrc: 'https://bit.ly/dan-abramov',
            },
          ],
          imageSrc: goldUrl,
        },
        {
          name: 'Giải may mắn 2',
          employees: [
            {
              name: 'Hoang Minh Toan',
              id: 1,
              imgSrc: 'https://bit.ly/dan-abramov',
            },
          ],
          imageSrc: goldUrl,
        },
      ],
    },
  })

  const { control, watch } = methods

  const { fields, update } = useFieldArray({
    control,
    name: 'listReward',
  })

  const selectId = watch('rewardSelect')

  const handleAddEmployee = (employeeID) => {
    const newObject = produce(fields[parseInt(selectId)], (draft) => {
      draft.employees.push({
        name: 'Hoang Minh Toan',
        id: 2,
        imgSrc: 'https://bit.ly/dan-abramov',
      })
    })
    update(parseInt(selectId), newObject)
  }

  return (
    <div className="App">
      <FormProvider {...methods}>
        <Wrapper>
          <RewardComponent fields={fields} />
          <CounterComponent
            updateReward={update}
            addNewEmployee={handleAddEmployee}
          />
        </Wrapper>
      </FormProvider>
    </div>
  )
}

export default App
