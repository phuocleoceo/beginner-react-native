import { List, Button } from 'react-native-paper';
import React from 'react';

export default function DetailScreen({ route, navigation })
{
    const { title, content } = route.params;
    return (
        <List.Section>
            <List.Subheader>{title}</List.Subheader>
            <List.Item title={content} />
            <Button icon="facebook" mode="contained"
                onPress={() => navigation.goBack()}>
                Go Back
            </Button>
        </List.Section>
    );
}
