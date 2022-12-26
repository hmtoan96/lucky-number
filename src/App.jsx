import { useMemo } from 'react'
import styled from '@emotion/styled'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'
import { produce } from 'immer'
import specialRewardImg from './assets/images/specical-reward.png'
import firstRewardImg from './assets/images/first-reward.png'
import secondRewardImg from './assets/images/second-reward.png'
import thirdRewardImg from './assets/images/third-reward.png'
import luckyReward1Img from './assets/images/lucky-reward-1.png'
import luckyReward2Img from './assets/images/lucky-reward-2.png'
import luckyReward3Img from './assets/images/lucky-reward-3.png'
import RewardComponent from './container/reward'
import CounterComponent from './container/counter'
import { dataID, dataName, dataDepartments } from './data'
import './App.css'

const Wrapper = styled.div(`
  background-image: url('/img/background-image.png');
  padding: 2rem;
  min-height: 100vh;
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;
`)
function App() {
  const data = useMemo(() => {
    let users = {}
    dataID.forEach((element, index) => {
      users[element] = {
        id: element,
        name: dataName[index],
        department: dataDepartments[index],
      }
    })
    return users
  }, [dataID])

  const methods = useForm({
    defaultValues: {
      rewardSelect: '',
      listReward: [
        {
          name: 'Giải đặc biệt',
          employees: [],
          imageSrc: [specialRewardImg],
        },
        {
          name: 'Giải nhất',
          employees: [],
          imageSrc: [firstRewardImg],
        },
        {
          name: 'Giải nhì',
          employees: [],
          imageSrc: [secondRewardImg],
        },
        {
          name: 'Giải ba',
          employees: [],
          imageSrc: [thirdRewardImg],
        },
        {
          name: 'Giải may mắn 1',
          employees: [],
          imageSrc: [luckyReward1Img, luckyReward2Img, luckyReward3Img],
        },
        {
          name: 'Giải may mắn 2',
          employees: [],
          imageSrc: [luckyReward1Img, luckyReward2Img, luckyReward3Img],
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
      draft.employees.push(data[employeeID])
    })
    update(parseInt(selectId), newObject)
  }

  return (
    <Wrapper>
      <div className="App">
        <FormProvider {...methods}>
          <CounterComponent
            updateReward={update}
            addNewEmployee={handleAddEmployee}
            users={data}
          />
          <RewardComponent fields={fields} />
        </FormProvider>
      </div>
    </Wrapper>
  )
}

export default App
