import { StyleSheet, View, Image, TextInput, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useForm, useController } from "react-hook-form";
import { Button } from 'react-native-paper';
import React from 'react';

export default function NewContact({ navigation })
{
    const { control, handleSubmit, formState: { errors } } = useForm();

    const Input = ({ name, control, placeHolder }) =>
    {
        const { field } = useController({
            control, defaultValue: "", name, rules: { require: true }
        });
        return (
            <TextInput
                style={styles.formInput}
                placeholder={placeHolder}
                onChangeText={field.onChange}
                value={field.value}
            />
        );
    };

    const onSubmit = (data) =>
    {
        console.log(data);
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.avatarIcon}>
                <Image style={styles.image} source={require("../../assets/people.png")} />
            </View>

            <View style={styles.formControl}>
                <Icon name="id-card" size={35} color="#6200ee" style={styles.formIcon} />
                <Input name="name" control={control} placeHolder="Enter name..." />
            </View>
            {errors.name && Alert.alert("Name is required")}

            <View style={styles.formControl}>
                <Icon name="phone" size={35} color="#6200ee" style={styles.formIcon} />
                <Input name="mobile" control={control} placeHolder="Enter mobile phone..." />
            </View>

            <View style={styles.formControl}>
                <Icon name="voicemail" size={35} color="#6200ee" style={styles.formIcon} />
                <Input name="email" control={control} placeHolder="Enter email" />
            </View>

            <Button style={styles.btn} mode="contained"
                icon="plus" onPress={handleSubmit(onSubmit)}>
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
        padding: 5,
        width: 50,
        height: 50,
        left: 10
    },
    formInput: {
        flex: 5,
        fontSize: 20,
        padding: 10,

        borderWidth: 1,
        borderColor: "#7a7777",
        borderRadius: 10
    }
});
