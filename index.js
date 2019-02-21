import { Navigation } from "react-native-navigation";
import Login from './src/containers/Login';
import Success from "./src/containers/Success";


Navigation.registerComponent(`navigation.assignment.login`, () => Login);
Navigation.registerComponent(`navigation.assignment.success`, () => Success);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children:[{
                    component:{
                        name: "navigation.assignment.login",
                        options:{
                            topBar:{
                                title:{
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
