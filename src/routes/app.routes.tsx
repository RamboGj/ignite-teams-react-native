import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Groups } from '@screens/Groups'
import { Players } from '@screens/Players'
import { CreateGroup } from '@screens/CreateGroup'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName='groups' screenOptions={{ headerShown: false }}>
      <Screen 
        name='groups' 
        component={Groups} 
      />
      <Screen 
        name='createGroup' 
        component={CreateGroup} 
      />
      <Screen 
        name='players' 
        component={Players} 
      />
    </Navigator>
  )
}