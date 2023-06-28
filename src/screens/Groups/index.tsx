import { FlatList, Text } from 'react-native';
import { Container} from './style';
import { Header } from '@components/Header';
import { HighlightText } from '@components/HighlightText';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState([
    { groupName: 'Group 1 name' },
    { groupName: 'Group 2 name' },
  ])

  return (
    <Container>
      <Header />
      
      <HighlightText title='Groups' subtitle='Play with your group' />

      <FlatList 
        data={groups}
        keyExtractor={item => item.groupName}
        renderItem={({item}) => (
          <GroupCard groupName={item.groupName} />
        )}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : null}
        ListEmptyComponent={() => <ListEmpty message='You have not added any group yet.' />}
      />
      

      <Button label='Add group' />
    </Container>
  );
}

