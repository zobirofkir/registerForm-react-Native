import React from "react";
import { 
    View, 
    AppRegistry, 
    StyleSheet, 
    ImageBackground, 
    TextInput,
    Button,
    Modal
} 
from "react-native";

const App = () => {
    return (
        <ImageBackground 
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/8/8c/A_boma_in_the_forest.jpg" }}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <TextInput placeholder="username" style={styles.input} />
                <TextInput placeholder="email" style={styles.input} />
                <TextInput placeholder="password" style={styles.input} />
                <Button title="register" color="black" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignSelf: "stretch", // Adjusted to take the full width
        margin: 20,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
});


AppRegistry.registerComponent("cswWebApp", () => App);
