import { List } from 'react-native-paper';
import React from 'react';

export default function DetailScreen(props)
{
    const { title, content } = props?.route?.params;
    return (
        <List.Section>
            <List.Subheader>{title}</List.Subheader>
            <List.Item title={content} />
        </List.Section>
    );
}
