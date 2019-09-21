import {createStackNavigator} from 'react-navigation-stack';

import {setDefaultHeaderLayout} from '../../../routes/headerUtils';

import Profile from './index';

export const ROUTE_NAMES = {
  PROFILE: 'PROFILE',
};

const ROUTES = createStackNavigator({
  [ROUTE_NAMES.PROFILE]: {
    screen: Profile,
    navigationOptions: ({navigation}) =>
      setDefaultHeaderLayout(navigation, 'Profile'),
  },
});

export default ROUTES;
