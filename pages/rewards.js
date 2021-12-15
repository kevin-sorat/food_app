import * as React from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
import { Headline, Subheading } from 'react-native-paper';

export function getRewardsPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Headline style={styles.content}>Rewards</Headline>
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