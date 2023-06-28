import { TouchableOpacityProps } from "react-native";
import { Card, GroupIcon, GroupName } from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  groupName: string
}

export function GroupCard({ groupName, ...rest }  : GroupCardProps) {
  return (
    <Card {...rest}>
      <GroupIcon />
      <GroupName>{groupName}</GroupName>
    </Card>
  )
}