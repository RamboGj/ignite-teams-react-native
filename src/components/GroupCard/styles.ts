import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native'

export const Card = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  
  padding: 24px;
  margin-bottom: 12px;
`

export const GroupName = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

  margin-left: 16px;
`

export const GroupIcon = styled(UsersThree).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: 'fill'
}))``
