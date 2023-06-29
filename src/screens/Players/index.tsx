import { FlatList } from 'react-native'
import { useState } from 'react'

import { Header } from "@components/Header";
import { HighlightText } from "@components/HighlightText";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, TeamMembersAmount } from "./styles";
import { Button } from '@components/Button';

export function Players() {
  const [selectedTeam, setSelectedTeam] = useState<string>('TIME A')
  const [players, setPlayers] = useState<string[]>([])

  return (
    <Container>
      <Header showBackButton />

      <HighlightText title="Group name" subtitle="Add your friends and create teams" />

      {/*autoCorrect avoids mobile keyboard trying to correct the written stuff */}
      <Form>
        <Input placeholder="Person name" autoCorrect={false} />
        <IconButton icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['TIME A', 'TIME B']}
          keyExtractor={item => item}
          renderItem={({ item }) => {
            const isActive = selectedTeam === item

            return (
              <Filter onPress={() => setSelectedTeam(item)} title={item} isActive={isActive} />
            )
          }}
          horizontal
        />

        <TeamMembersAmount>{players.length}</TeamMembersAmount>
      </HeaderList>


      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
         <PlayerCard name={item} onRemove={() => console.log('fodase porra')}/>
        )}
        ListEmptyComponent={() => <ListEmpty message='You have not added any person yet' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 ? { flex: 1 } : null
        ]}
      />

      <Button label='Remove group' type='secondary' />
    </Container>
  )
}