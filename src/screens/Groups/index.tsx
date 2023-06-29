import { FlatList } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header';
import { HighlightText } from '@components/HighlightText';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container} from './style';

export function Groups() {
  const [groups, setGroups] = useState([])

  const { navigate } = useNavigation()

  function handleGoToCreateGroup() {
    navigate('createGroup')
  }

  return (
    <Container>
      <Header />
      
      <HighlightText title='Groups' subtitle='Play with your group' />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard groupName={item} />
        )}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : null}
        ListEmptyComponent={() => <ListEmpty message='You have not added any group yet.' />}
      />
      
      <Button label='Add group' onPress={handleGoToCreateGroup} />
    </Container>
  );
}

