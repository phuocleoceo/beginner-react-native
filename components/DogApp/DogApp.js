import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Card, IconButton, } from 'react-native-paper';
import React, { useState, useEffect } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ContactList()
{
    const [listDog, setListDog] = useState([
        { id: 0, name: "", bred_for: "", url: "" }
    ]);

    useEffect(() =>
    {
        const FetchDog = async () =>
        {
            try
            {
                const API_URL = "https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json";
                const response = await fetch(API_URL);
                const responseJSON = await response.json();
                setListDog(responseJSON);
            }
            catch { }
        }
        FetchDog();
    }, []);

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listDog);

    const _layoutProvider = new LayoutProvider(
        (index) => _dataProvider.getDataForIndex(index),
        (type, dim) => { dim.width = SCREEN_WIDTH / 2; dim.height = 300; })

    const _rowRenderer = (type, data) =>
    {
        const { id, name, bred_for, url } = data;
        return (
            <View style={styles.listD} key={id} >
                <Card>
                    <Card.Cover source={{ uri: url }} />
                    <Card.Title
                        title={name}
                        subtitle={bred_for}
                        right={() => <IconButton icon="heart" />}
                    />
                </Card>
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

    listD: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#e3e1dc"
    },
});