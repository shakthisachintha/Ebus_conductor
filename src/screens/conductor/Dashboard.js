import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, Avatar } from 'react-native-paper';


import colors from '../../utils/colors';

export default class Dashboard extends React.Component {
   
    render() {
        return (
            <View style={StyleSheet.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Card style={styles.cardContainer}><Avatar.Icon size={40} icon="ticket" style={{ backgroundColor: 'purple' }} /></Card>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Card style={styles.cardContainer}><Avatar.Icon size={40} icon="map" style={{ backgroundColor: 'purple' }} /></Card>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Card style={styles.cardContainer}><Avatar.Icon size={40} icon="camera" style={{ backgroundColor: 'purple' }} /></Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card style={styles.cardContainer}><Avatar.Icon size={40} icon="folder" style={{ backgroundColor: 'purple' }} /></Card>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.30,
        elevation: 10,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        marginTop: 20,
        marginHorizontal: 20,
        marginVertical: 10
    }
});