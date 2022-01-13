import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Dimensions, View, Button } from "react-native";
import { Headline, Subheading } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import i18n from 'i18n-js';

export function getTranslatePage() {
    // const { width: WindowWidth } = Dimensions.get('window');
    const [highlightedLanguage, setHighlightedLanguage] = React.useState(i18n.locale);
    const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.locale);

    //console.log('highlightedLanguage: ' + highlightedLanguage);
    //console.log('selectedLanguage: ' + selectedLanguage);

    const _handleValueChange = (value) => {
        setHighlightedLanguage(value)
    };

    const _handlePressDone = () => {
        i18n.locale = highlightedLanguage;
        setSelectedLanguage(i18n.locale);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Headline style={styles.content}>{i18n.t('language')}</Headline>
            <Picker
                style={{ width: 280, backgroundColor: '#e1e1e1' }}
                selectedValue={highlightedLanguage}
                onValueChange={(value) => _handleValueChange(value)}>
            <Picker.Item label='中文' value='ch' />
            <Picker.Item label='English' value='en' />
            <Picker.Item label='日本語' value='ja' />
            <Picker.Item label='朝鮮語' value='ko' />
            <Picker.Item label='española' value='es' />
            <Picker.Item label='ไทย' value='th' />
          </Picker>
          <View style={styles.toolbar}>
            <Button style={styles.applyButton} title={i18n.t('apply')} 
                onPress={_handlePressDone} disabled={highlightedLanguage === selectedLanguage} />
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
    picker: {
        width: 280,
        backgroundColor: '#e1e1e1',
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        borderWidth: 1,
        // width: 280,
        // height: 60,
        paddingVertical: 6,
        paddingHorizontal: 6,
    },
});