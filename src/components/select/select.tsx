import React from 'react'
import { SelectOption, SelectValue } from '../../model/common'
import { SelectItem } from './select-item/select-item'
import * as Own from './select.components'

interface Props {
  showFilter?: boolean
  value: SelectValue
  items: SelectOption[]
  placeholder?: string
  className?: string
  onChange: (value: SelectValue) => void
}

const Select: FC<Props> = ({
  items,
  value,
  showFilter = false,
  className,
  placeholder,
  onChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const filterRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement

    if (
      dropdownRef.current &&
      filterRef.current &&
      !dropdownRef.current.contains(target) &&
      !filterRef.current.contains(target)
    ) {
      setIsOpen(false)
    }
  }

  const getFilterLabel = () => {
    const selectedItem = items.find(
      (item: SelectOption) => item.value === value
    )

    return selectedItem ? selectedItem.title : null
  }

  const onItemClicked = (item: SelectOption) => () => {
    onChange(item.value)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const renderItems = () =>
    items.map((item, index) => (
      <SelectItem
        key={index}
        item={item}
        onClick={onItemClicked(item)}
        selected={item.value === value}
      />
    ))

  return (
    <Own.Container className={className}>
      {showFilter ? (
        <>
          <Own.SelectWithFilter
            ref={filterRef}
            onClick={toggleMenu}
            isPlaceholder={!!getFilterLabel()}
          >
            {getFilterLabel() || placeholder}
          </Own.SelectWithFilter>
          <Own.DropdownContainer ref={dropdownRef} show={isOpen}>
            {renderItems()}
          </Own.DropdownContainer>
        </>
      ) : (
        <Own.ItemsContainer>{renderItems()}</Own.ItemsContainer>
      )}
    </Own.Container>
  )
}

export { Select }
