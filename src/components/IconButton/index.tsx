import { Container, IconButtonTypeStyleProps, Icon } from "./styles";
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


interface IconButtonProps extends TouchableOpacityProps {
  type?: IconButtonTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function IconButton({ type = 'primary', icon, ...rest }: IconButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}