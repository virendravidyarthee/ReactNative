import {Navigation} from "react-native-navigation";
import Login from './src/containers/Login';
import Success from "./src/containers/Success";
import {Provider} from 'react-redux'
import Store from './src/configureStore'

Navigation.registerComponentWithRedux(`navigation.assignment.login`, () => Login, Provider, Store);
Navigation.registerComponent(`navigation.assignment.success`, () => Success);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'assignment-stack',
                children: [{
                    component: {
                        name: "navigation.assignment.login",
                        options: {
                            topBar: {
                                title: {
                                    text: "Login"
                                }
                            }
                        }
                    }
                }]
            }
        }
    });
});
