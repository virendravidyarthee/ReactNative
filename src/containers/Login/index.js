import React, {Component} from 'react'
import {StyleSheet, TextInput, View, Button, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux'
import TextInputLayout from "../../components/TextInputLayout";
import {getEmail, isLoading, getPassword} from "./reducer";
import {setEmail, setPassword, logUserIn} from "./actions";

class Login extends Component<Props> {

    render() {
        const {dispatch, email, password, isLoading} = this.props
        return (
            <View style={styles.container}>
                <TextInputLayout
                    style={styles.textInputLayout}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        onChangeText={value => {
                            dispatch(setEmail(value.trim()))
                        }}/>
                </TextInputLayout>
                <TextInputLayout
                    style={styles.textInputLayout}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={'Password'}
                        onChangeText={value => {
                            dispatch(setPassword(value.trim()))
                        }}/>
                </TextInputLayout>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Login'
                        onPress={() => {
                            dispatch(logUserIn(email, password))
                        }}
                        disabled={!email || !password}/>
                </View>
                <ActivityIndicator
                    style={{opacity: isLoading ? 1 : 0}}  //https://github.com/facebook/react-native/issues/9023
                    animating={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    textInputLayout: {
        width: '85%'
    },
    input: {
        fontSize: 16,
        height: 40
    },
    buttonContainer: {
        width: '80%',
        marginTop: 20,
        marginBottom: 20
    },
    loader: {
        marginTop: 20
    }
});

const mapStateToProps = state => ({
    email: getEmail(state),
    password: getPassword(state),
    isLoading: isLoading(state)
});

export default connect(mapStateToProps)(Login);
