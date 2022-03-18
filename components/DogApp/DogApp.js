import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { fetchDogList } from '../../redux/slices/dogSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Card, IconButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ContactList()
{
    const { data: listDog, doneLoading } = useSelector(state => state.dog);
    const dispatch = useDispatch();
    useEffect(() =>
    {
        dispatch(fetchDogList());
    }, [dispatch]);

    const [currentWidth, setcurrentWidth] = useState(SCREEN_WIDTH);
    useEffect(() =>
    {
        Dimensions.addEventListener('change', ({ window: { width, height } }) =>
        {
            if (width < height) setcurrentWidth(SCREEN_WIDTH);
            else setcurrentWidth(SCREEN_HEIGHT);
        })
    }, []);

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(listDog);

    const _layoutProvider = new LayoutProvider(
        (index) => _dataProvider.getDataForIndex(index),
        (type, dim) => { dim.width = currentWidth / 2; dim.height = 300; })

    const _rowRenderer = (type, data) => 
    {
        const { id, name, bred_for, url } = data;
        return (
            <Card style={styles.dogItem} key={id}>
                <Card.Cover source={{ uri: url }} />
                <Card.Title
                    title={name}
                    subtitle={bred_for}
                    right={() => <IconButton icon="heart" />}
                />
            </Card>
        )
    }

    return (
        <View style={styles.container}>
            {
                doneLoading
                    ?
                    <RecyclerListView
                        style={{ flex: 1 }}
                        rowRenderer={_rowRenderer}
                        dataProvider={_dataProvider}
                        layoutProvider={_layoutProvider}
                        canChangeSize={true}
                    /> :
                    <Text>Loading...</Text>
            }
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

    dogItem: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#e3e1dc"
    },
});