import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, View, Modal, ImageBackground,Text } from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';

import { AppForm, AppFormInput, SubmitButton, ErrorMessage } from '../../components/forms';
import colors from '../../utils/colors';
import useAuth from '../../auth/useAuth';
import images from '../../utils/images';



const UserProfileScreen = ({ navigation }) => {

    // const { user } = useAuth();

    return (
        
        <ScrollView style={styles.scrollView}>
            <ImageBackground source={images.LOGING_BACKGROUND} style={styles.backgroundImage} >
            {/* <Image
                style={styles.topImage}
                source={images.LOGO}
                resizeMode="contain"
            /> */}
            <Text style={styles.userNameText}> Dumindu </Text>
            <Text style={styles.emailText}> duminduchamal@gmail.com </Text>
                <Image style={styles.avatar} source={{ uri : "https://cdn0.iconfinder.com/data/icons/transport-111/66/20-512.png" }} />
                <View style={{paddingTop:200 ,justifyContent: "center",alignItems: 'center',}}>
                    <AppForm
                        initialValues={{ name: "" , email: "" , address: "" , number: "" , image: "" }}
                        style={styles.data}
                        // validationSchema={reviewSchema}
                        // onSubmit={handleUpdate}
                    >
                        <AppFormInput
                            // autoFocus={true}
                            name="name"
                            autoCapitalize="words"
                            autoCorrect={false}
                            style={styles.input}
                            label="Name"
                            mode="outlined"
                            disabled
                            value="Dumindu"
                        />

                        <AppFormInput
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Email"
                            mode="outlined"
                            value="duminduchamal@gmail.com"
                            disabled
                        />

                        <AppFormInput
                            name="address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Address"
                            mode="outlined"
                            disabled
                            // multiline
                            // value={user.address}
                            multiline={true}
                            numberOfLines={2}
                            style={{width:300}}
                        />
                        <AppFormInput
                            name="number"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            label="Phone Number"
                            mode="outlined"
                            disabled
                            // value={user.number}
                        />
                    </AppForm>
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="outlined" icon="shield-key" labelStyle={{ fontSize: 13 }} onPress={() => navigation.navigate('ChangePassword')}>Change Password</Button>
                    <Button mode="outlined" icon="account-edit" labelStyle={{ fontSize: 13 }} onPress={() => navigation.navigate('EditConductor')} >Edit Details</Button>
                </View>
            </ImageBackground>
        </ScrollView>
        

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: 'center',
        // paddingTop: 300
    },
    button: {
        marginTop: 40,
        alignSelf: 'center',
    },
    headText: {
        fontSize: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'purple'
    },
    buttonContent: {
        height: 40,
        width: 150,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    userNameText: {
        // width: 75, height: 75,
        // justifyContent: 'center',
        alignSelf: 'flex-start',
        position:'absolute',
        top:65,
        left:30,
        fontSize:20,
        fontWeight:'bold',
        color: 'white'
        // marginTop: 60
    },
    emailText: {
        alignSelf: 'flex-start',
        position:'absolute',
        top:92,
        left:30,
        color: 'white'
    },
    input: {
        height: 45,
        marginTop: 10,
        width: 300
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'center',
        position: 'absolute',
        top:50,
        right:40
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
        paddingBottom: 60
    },
});

export default UserProfileScreen;