import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log("pressed");
    }
    return (
        <Pressable 
            style={styles.buttonContainer}
            onPress={pressHandler}
            android_ripple={{color: '#640233'}}
        >
            <View>
                <Text
                    style={styles.buttonText}
                >
                    {children}
                </Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },

    buttonText: {
        color: 'white',
        textAlign: "center",
    }
})