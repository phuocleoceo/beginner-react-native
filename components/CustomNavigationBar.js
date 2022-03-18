import { Appbar } from 'react-native-paper';

export default function CustomNavigationBar({ navigation, back })
{
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="Dog App" />
        </Appbar.Header>
    );
}