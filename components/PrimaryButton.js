import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {

    // function pressHandler() {
    //     console.log("pressed");
    // }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{color: '#640233'}}
            >
                <Text
                    style={styles.buttonText}
                >
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden',
        borderRadius: 28,
    },

    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        // elevation: 2,
    },

    buttonText: {
        color: 'white',
        textAlign: "center",
    },

    pressed: {
        opacity: 0.75,
    }
})