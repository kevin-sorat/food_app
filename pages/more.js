import * as React from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
import { Headline, Subheading } from 'react-native-paper';

export function getMorePage() {
    return (
        <SafeAreaView style={styles.container}>
            <Headline style={styles.content}>More</Headline>
            <Subheading>Coming soon...</Subheading>
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