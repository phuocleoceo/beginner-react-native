import { Appbar } from 'react-native-paper';

export default function CustomContactBar({ navigation, back })
{
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="Contact" />
        </Appbar.Header>
    );
}