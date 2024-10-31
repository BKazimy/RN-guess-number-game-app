import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} />
            <PrimaryButton>React</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32, 
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});