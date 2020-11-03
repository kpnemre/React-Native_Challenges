/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './Course_Drawer_Nav/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// cd android && gradlew clean && cd ..