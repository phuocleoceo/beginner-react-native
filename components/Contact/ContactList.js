import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import React, { useState } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ContactList()
{
    const [listContact, setListContact] = useState([
        {
            id: 1,
            name: "Truong Minh Phuoc",
            mobile: "0382609982",
            email: "ht10082001@gmail.com",
            image: "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/87551951_534646137176656_6420289943544791040_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4BcWODzEGUcAX8Lx2dw&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-MMoMTWZVoEpN-TflrKxCukNexXciqU_Wqa7aKOEIf5Q&oe=6250AD06"
        },
        {
            id: 2,
            name: "Truong Thach Kim Ngan",
            mobile: "0945787549",
            email: "muoptay212@gmail.com",
            image: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/275361270_2930131770612188_2020583930792862412_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=XjibRpuPS_cAX8ZB7Xj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-6.fna&oh=00_AT_R9jA2u-oaozr7Z0hKHiNWD88VIkkfu8vI-z9udAZAsA&oe=6230C349"
        }
    ]);

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listContact);

    const _layoutProvider = new LayoutProvider(
        (index) => _dataProvider.getDataForIndex(index),
        (type, dim) => { dim.width = SCREEN_WIDTH; dim.height = 100; })

    const _rowRenderer = (type, data) =>
    {
        const { id, name, mobile, email, image } = data;
        return (
            <View key={id} style={styles.listItem}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.body}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.mobile}>{mobile}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <RecyclerListView
                style={{ flex: 1 }}
                rowRenderer={_rowRenderer}
                dataProvider={_dataProvider}
                layoutProvider={_layoutProvider}
            />
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
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15
    },
    body: {
        marginLeft: 10,
        marginRight: 10,
        maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
    },
    image: {
        height: 70,
        width: 70,
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
});