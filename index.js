
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Amplify} from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const client = generateClient();
AppRegistry.registerComponent(appName, () => App);
