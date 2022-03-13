import { StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';
import { List, Button } from 'react-native-paper';
import React from 'react';

export default function NewContact({ navigation })
{
    const handleGoBack = () => navigation.goBack();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.avatarIcon}>
                <Image style={styles.image} source={require("../../assets/people.png")} />
            </View>

            <View style={styles.formControl}>
                <Button icon="account-circle" style={styles.formIcon}></Button>
                <TextInput
                    style={styles.formInput}
                    placeholder="Enter Name..."
                />
            </View>

            <View style={styles.formControl}>
                <Button icon="cellphone" style={styles.formIcon}></Button>
                <TextInput
                    style={styles.formInput}
                    placeholder="Enter Mobile Phone..."
                />
            </View>

            <View style={styles.formControl}>
                <Button icon="email" style={styles.formIcon}></Button>
                <TextInput
                    style={styles.formInput}
                    placeholder="Enter Email..."
                />
            </View>

            <Button style={styles.btn} icon="plus"
                mode="contained" onPress={handleGoBack}>
                Add Contact
            </Button>
        </ScrollView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
        height: "100%"
    },
    avatarIcon: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center"
    },
    btn: {
        width: "45%",
        top: 10,
        padding: 5,
        alignSelf: "center",
    },
    formControl: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
    },
    formIcon: {
        flex: 1,
        width: 50,
        height: 50
    },
    formInput: {
        flex: 50,
        fontSize: 20,
        padding: 10,

        borderWidth: 1,
        borderColor: "#7a7777",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    }
});
