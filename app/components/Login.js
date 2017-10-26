import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import TextField from 'react-native-md-textinput';

import FacebookLogin from './FacebookLogin';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: ''};
    }

    login = async function logIn() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('342498269493972', {
            permissions: ['public_profile'],
        });

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            console.log(response.json());
        }
    };

    static navigationOptions = {
        title: 'Voluntinder'
    };
    render() {
        let pic = {
            uri: "https://challengefailure.org/wp-content/uploads/2016/03/home-post-featured-image-2.jpg"
        };
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle = { styles.contentContainerStyle }
                forceFocusField       = { this.state.focusField }
                scrollPadding         = { 10 }
            >
                <Image source={pic} resizeMode="stretch" style={{height:150, width:200, alignItems: 'center'}}/>

                <TextField label={"Username"}
                           highlightColor={'#00BCD4'}
                           onChangeText={(username) => this.setState({username})}
                           value={this.state.username}
                />
                <TextField label={"Password"}
                           highlightColor={'#00BCD4'}
                           onChangeText={(password) => this.setState({password})}
                           value={this.state.password}
                />
                <Button
                    onPress={() => navigate('Profile', { user: this.state.username })}
                    title="Sign in"
                />
                <Button
                    onPress={() => navigate('Profile', { user: this.state.username })}
                    title="Create Account"
                />
                <FacebookLogin/>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    contentContainerStyle: {
        height:            700,
        alignItems:        'stretch',
        paddingHorizontal: 15
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    }
});
