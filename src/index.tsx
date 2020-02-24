import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { GlobalStyle } from './global-style'
import { Select } from './components/select/select'
import { SelectOption, SelectValue } from './model/common'

import RossAvatar from './assets/icons/ross.svg'
import HarryAvatar from './assets/icons/harry.svg'
import AmitAvatar from './assets/icons/amit.svg'
import SuzyAvatar from './assets/icons/suzy.svg'

console.info(`⚛️ ${React.version}`)

// Mock items
const ItemsWithoutFilter: SelectOption[] = [
  {
    title: 'My evaluations',
    value: 'My evaluation'
  },
  {
    title: 'My steps',
    value: 'My steps'
  }
]

const ItemsWithFilter: SelectOption[] = [
  {
    icon: RossAvatar,
    title: 'Ross Rich',
    subTitle: 'Manager',
    value: 'Ross Rich' // NOTE: This can be userId which will be sent to backend
  },
  {
    icon: HarryAvatar,
    title: 'Harry Avery',
    subTitle: 'Associate',
    value: 'Harry Avery'
  },
  {
    icon: AmitAvatar,
    title: 'Amit Patel',
    subTitle: 'Associate',
    value: 'Amit Patel'
  },
  {
    icon: SuzyAvatar,
    title: 'Suzy Anderson',
    subTitle: 'Associate',
    value: 'Suzy Anderson'
  }
]

// Wrappers
const SelectContainer = styled.div`
  display: block;
  margin: auto;
`

const SelectWrapperWithoutFilter = styled(Select)`
  width: 154px;
  margin: 10px 0;
`

const SelectWrapperWithFilter = styled(Select)`
  width: 270px;
`

const App: FC = () => {
  const [withoutFilterValue, setWithoutFilterValue] = React.useState<
    SelectValue
  >('My evaluations')

  const [withFilterValue, setWithFilterValue] = React.useState<SelectValue>(
    'My evaluations'
  )

  const onChangeValueWithoutFilter = (value: SelectValue) => {
    setWithoutFilterValue(value)
  }

  const onChangeValueWithFilter = (value: SelectValue) => {
    setWithFilterValue(value)
  }

  return (
    <>
      <GlobalStyle />
      <SelectContainer>
        <SelectWrapperWithoutFilter
          items={ItemsWithoutFilter}
          value={withoutFilterValue}
          onChange={onChangeValueWithoutFilter}
        ></SelectWrapperWithoutFilter>
        <SelectWrapperWithFilter
          showFilter
          items={ItemsWithFilter}
          value={withFilterValue}
          placeholder="Filer by name"
          onChange={onChangeValueWithFilter}
        ></SelectWrapperWithFilter>
      </SelectContainer>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
