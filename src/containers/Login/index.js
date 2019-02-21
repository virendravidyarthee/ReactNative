import React, {Component} from 'react'
import {StyleSheet, TextInput, View, Button, ActivityIndicator} from 'react-native';
import TextInputLayout from "../../components/TextInputLayout";
import {Navigation} from "react-native-navigation";

export default class Login extends Component<Props> {
    state = {};

    onPressLogin = () => {
        this.showLoader();
        setTimeout(() => {
            if (this.isCorrectCredential()) {
                this.showSuccessPage();
            } else {
                alert('Incorrect credentials')
            }
            this.hideLoader()
        }, 2000);

    };

    isCorrectCredential = (): boolean => {
        return this.state.email === 'bill_gates@microsoft.com' && this.state.password === '123456'
    };

    showLoader = () => {
        this.setState({
            isLoading: true
        })
    };

    hideLoader = () => {
        this.setState({
            isLoading: false
        })
    };

    showSuccessPage = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'navigation.assignment.success',
                passProps: {
                    email: this.state.email
                },
                options: {
                    topBar: {
                        title: {
                            text: 'Thank you'
                        }
                    }
                }
            }
        });
    };

    componentDidMount() {
        this.setState({
            isLoading: false,
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInputLayout
                    style={styles.textInputLayout}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        onChangeText={value => this.setState({
                            email: value.trim()
                        })}/>
                </TextInputLayout>
                <TextInputLayout
                    style={styles.textInputLayout}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        onChangeText={value => this.setState({
                            password: value.trim()
                        })}/>
                </TextInputLayout>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Login'
                        onPress={this.onPressLogin}
                        disabled={!this.state.email || !this.state.password}/>
                </View>
                <ActivityIndicator
                    style={{opacity: this.state.isLoading ? 1 : 0}}  //https://github.com/facebook/react-native/issues/9023
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
