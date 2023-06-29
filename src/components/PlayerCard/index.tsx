import { IconButton } from "@components/IconButton"
import { PlayerCardContainer, PlayerIcon, PlayerName } from "./styles"
import { Text } from 'react-native'

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <PlayerCardContainer>
      <PlayerIcon />
      <PlayerName>
        {name}
      </PlayerName>
      <IconButton onPress={onRemove} icon="close" type="secondary" />
    </PlayerCardContainer>
  )
}