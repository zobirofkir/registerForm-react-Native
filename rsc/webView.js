import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

const cswWebApp = ()=>{
    return (
        <View>
            <WebView source={{uri: "https://zobirofkir.com"}}/>
        </View>
    );
}

export default cswWebApp;