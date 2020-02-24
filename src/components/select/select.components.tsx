import styled from 'styled-components'
import { FontSizes, Colors } from '../../lib/style-guide'

export const Container = styled.div`
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  position: relative;
`

export const ItemsContainer = styled.div`
  padding: 8px 0;
  background: ${Colors.PureWhite};
  border-radius: 4px;
  border: 1px solid ${Colors.Border};
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
`

interface SelectWithFilterProps {
  isPlaceholder: boolean
}

export const SelectWithFilter = styled.div<SelectWithFilterProps>`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 1px solid ${Colors.Border};
  padding: 16px 0 13px 20px;
  background: ${Colors.PureWhite};
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  color: ${Colors.TX4};
  ${FontSizes.large}
  line-height: 20px;

  ${({ isPlaceholder }) =>
    isPlaceholder &&
    ` color: ${Colors.TX1};
  `}
`

interface DropdownProps {
  show: boolean
}

export const DropdownContainer = styled.div<DropdownProps>`
  position: absolute;
  top: 51px;
  left: 0;
  right: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid ${Colors.Border};
  border-top: none;
  padding: 10px 0;
  background: ${Colors.PureWhite};
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  opacity: 0;
  transition: 0.3s opacity ease-in;

  ${({ show }) =>
    show &&
    ` opacity: 1;
  `}
`
