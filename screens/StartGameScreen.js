import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
        console.log(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confermInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Input has tot be a number between 1 to 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
        }
        else {
            console.log("Valid number!")
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false} // prevents form auto correnion useful for email input
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonGroupContiner}>
                <View style={styles.buttons}>
                    <PrimaryButton onPress={resetInputHandler}>React</PrimaryButton>
                </View>

                <View style={styles.buttons}>
                    <PrimaryButton onPress={confermInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
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
    
    buttonGroupContiner: {
        flexDirection: 'row',
    },

    buttons: {
        flex: 1,
    },

});