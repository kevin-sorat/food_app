import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Headline, Subheading, Text, DataTable } from 'react-native-paper';
import i18n from 'i18n-js';

export function getBagPage() {
    return (
        <ScrollView style={styles.bagView}>
            <Headline>Your items</Headline>
            <View style={styles.bagDetailView}>
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bagView: {
        backgroundColor: '#e9d1d1',
        padding: 20,
        width: '100%',
        height: '100%',
    },
    bagDetailView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});