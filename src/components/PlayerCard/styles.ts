import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'


export const PlayerCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  max-height: 54px;
  border-radius: 6px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const PlayerName = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const PlayerIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'person',
  color: theme.COLORS.WHITE,
  weight: 'fill',
  size: 24
}))`
  margin-left: 16px; 
  margin-right: 8px;
`