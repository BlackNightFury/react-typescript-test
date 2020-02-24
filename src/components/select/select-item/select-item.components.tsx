import styled from 'styled-components'
import { FontSizes, Colors } from '../../../lib/style-guide'

import ItemPreIcon from '../../../assets/icons/pre-select.svg'

interface ContainerProps {
  selected?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  line-height: 20px;
  color: ${Colors.TX1};
  ${FontSizes.large}

  &:hover {
    background: ${Colors.Blue};
    color: ${Colors.PureWhite};

    p {
      color: ${Colors.BG1};
    }
  }

  ${({ selected }) =>
    selected &&
    `
      background: ${Colors.Blue};
      color: ${Colors.PureWhite};

      p {
        color: ${Colors.BG1};
      }
    `}
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 23px;
`

export const PreIcon = styled.img.attrs({
  src: ItemPreIcon,
  alt: 'pre-icon'
})`
  width: 24px;
  height: 24px;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 12px;
`

export const SubTitle = styled.p`
  margin: 0 0 0 8px;
  ${FontSizes.medium}
  line-height: 18px;
  color: ${Colors.TX3};
`
