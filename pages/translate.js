import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Dimensions, View, Button } from "react-native";
import { Headline, Subheading } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import i18n from 'i18n-js';

export function getTranslatePage() {

    const { width: WindowWidth } = Dimensions.get('window');
    const [language, setLanguage] = React.useState('en');

    const _handlePressDone = () => {
        i18n.locale = language;
        console.log("i18n.locale: " + i18n.locale);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Headline style={styles.content}>{i18n.t('language')}</Headline>
            <Picker
                style={{ width: 280, backgroundColor: '#e1e1e1' }}
                selectedValue={language}
                onValueChange={itemValue => setLanguage(itemValue)}>
            <Picker.Item label="Chinese" value="ch" />
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Japanese" value="ja" />
            <Picker.Item label="Korean" value="ko" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="Thai" value="th" />
          </Picker>
          <View style={styles.toolbar}>
            <Button title="Done" onPress={_handlePressDone} />
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolbar: {
        marginTop: 20,
        backgroundColor: '#f1f1f1',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
    },
});