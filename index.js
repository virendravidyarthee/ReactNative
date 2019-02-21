import { Navigation } from "react-native-navigation";
import App from './src/App';


Navigation.registerComponent(`navigation.assignment.app`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children:[{
                    component:{
                        name: "navigation.assignment.app",
                        options:{
                            topBar:{
                                title:{
                                    text: "App"
                                }
                            }
                        }
                    }
                }]
            }
        }
    });
});
