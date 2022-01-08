import * as React from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
import { Headline, Subheading } from 'react-native-paper';
import i18n from 'i18n-js';

export function getHomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <Headline style={styles.content}>{i18n.t('chickenValley')}</Headline>
            <Subheading>{i18n.t('pikePlaceMarket')}</Subheading>
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
        justifyContent: 'center',
        alignItems: 'center',
    }
});