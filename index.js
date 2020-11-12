/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Drawer from './Course_Drawer_Nav/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Drawer);


// cd android && gradlew clean && cd ..