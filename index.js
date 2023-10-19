/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import _ from 'lodash';

AppRegistry.registerComponent(appName, () => App);

const tab = [1,7,22,4];
console.log('Średnia tablicy:');
console.log(_.mean(tab));