import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import React from 'react';


export default function HomeScreen({ navigation })
{
    const title = "phuocleoceo";
    const content = "Laptop owner";
    return (
        <TouchableOpacity onPress={() =>
            navigation.navigate('Detail', { title, content })}
        >
            <Card>
                <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph>{content}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}
