import React from 'react';
import { WebView } from 'react-native-webview'; // Import WebView with curly braces

function MyWebView() {
  return (
    <WebView
      source={{ uri: 'https://zobirofkir.com' }} // Replace with the URL you want to display
    />
  );
}

export default MyWebView;
