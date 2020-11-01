/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import LoginPage from './Course_Firebase_LoginPage/LoginPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginPage);
