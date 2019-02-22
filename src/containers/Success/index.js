import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';

export default class Success extends Component<Props> {

    static options(){
        return {
            topBar: {
                title: {
                    text: 'Thank you'
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Thank you for logging in, {this.props.email}</Text>
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
    }
});
