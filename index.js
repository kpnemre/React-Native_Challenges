/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './Course_Navigation/Router'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
