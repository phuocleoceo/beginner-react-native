import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import useSQLite from '../../hooks/useSQLite';
import { FAB } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ContactList({ navigation })
{
    const { listContact } = useSQLite();
    console.log(listContact);
    // const [listContact, setListContact] = useState([{ id: 1, name: "phuoc", mobile: "032", email: "@" }]);

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listContact);

    const _layoutProvider = new LayoutProvider(
        (index) => _dataProvider.getDataForIndex(index),
        (type, dim) => { dim.width = SCREEN_WIDTH; dim.height = 60; })

    const _rowRenderer = (type, data) =>
    {
        const { id, name, mobile, email } = data;
        return (
            <View key={id} style={styles.listItem} elevation={5}>
                <Image style={styles.image} source={require("../../assets/people.png")} />
                <View style={styles.body}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        )
    }

    const handleNewContact = () => navigation.navigate("NewContact");

    return (
        <View style={styles.container}>
            {/* <RecyclerListView
                style={{ flex: 1 }}
                rowRenderer={_rowRenderer}
                dataProvider={_dataProvider}
                layoutProvider={_layoutProvider}
            />
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={handleNewContact}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
    },
    listItem: {
        width: SCREEN_WIDTH - 10,
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: "#e3e1dc",
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    body: {
        marginLeft: 10,
        marginRight: 10,
        maxWidth: SCREEN_WIDTH - 10,
    },
    image: {
        height: 35,
        width: 35,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mobile: {
        fontSize: 14,
        opacity: 0.5,
    },
    email: {
        fontSize: 14,
        opacity: 0.5,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});