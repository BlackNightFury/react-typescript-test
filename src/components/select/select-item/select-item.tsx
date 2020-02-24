import React from 'react'
import { SelectValue, SelectOption } from '../../../model/common'
import * as Own from './select-item.components'

interface Props {
  selected?: boolean
  item: SelectOption
  onClick: (value: SelectValue) => void
}

const SelectItem: FC<Props> = ({ item, selected, onClick }) => (
  <Own.Container selected={selected} onClick={onClick}>
    {item.icon && (
      <Own.ItemContainer>
        <Own.PreIcon />
        <Own.Icon src={item.icon} alt="icon" />
      </Own.ItemContainer>
    )}
    {item.title}
    {item.subTitle && <Own.SubTitle>{item.subTitle}</Own.SubTitle>}
  </Own.Container>
)

export { SelectItem }
