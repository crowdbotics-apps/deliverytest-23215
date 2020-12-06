import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps182400Navigator from '../features/Maps182400/navigator';
import Additem182399Navigator from '../features/Additem182399/navigator';
import Maps182395Navigator from '../features/Maps182395/navigator';
import UserProfile182391Navigator from '../features/UserProfile182391/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps182400: { screen: Maps182400Navigator },
Additem182399: { screen: Additem182399Navigator },
Maps182395: { screen: Maps182395Navigator },
UserProfile182391: { screen: UserProfile182391Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
