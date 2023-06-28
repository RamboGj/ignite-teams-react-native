import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonLabel } from "./styles";

export type ButtonTypeStyleProps = 'primary' | 'secondary'

interface ButtonProps extends TouchableOpacityProps {
  label: string
  type?: ButtonTypeStyleProps
} 

export function Button({ label, type = 'primary', ...rest}: ButtonProps) {
  return (
    <ButtonContainer {...rest} type={type}>
      <ButtonLabel>
        {label}
      </ButtonLabel>
    </ButtonContainer>
  )
}