import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Headline, Subheading, Text, DataTable } from 'react-native-paper';
import i18n from 'i18n-js';

export function getDetailPage(selectedItemID, selectedItemName, selectedItemPrice, selectedItemPic) {

    if (!selectedItemID) {
        return;
    }

    const selectedDetail = {
        name: i18n.t(selectedItemID + "_name"),
        ingredients: i18n.t(selectedItemID + "_ingredients"),
        calories: i18n.t(selectedItemID + "_calories"),
        totalFat: i18n.t(selectedItemID + "_totalFat"),
        sodium: i18n.t(selectedItemID + "_sodium"),
        totalCarbohydrate: i18n.t(selectedItemID + "_totalCarbohydrate"),
        totalSugar: i18n.t(selectedItemID + "_totalSugar"),
        protein: i18n.t(selectedItemID + "_protein")
    };

    return (
        <ScrollView style={styles.detailView}>
            <Headline>{selectedItemName}</Headline>
            <Subheading>{selectedItemPrice}</Subheading>
            <View style={styles.subDetailView}>
                <Image style={styles.bigPic} source={selectedItemPic} />
                <Headline style={styles.Ingredients}>{i18n.t('ingredients')}</Headline>
                <Text>{selectedDetail.ingredients}</Text>
                <Headline style={styles.nutrition}>{i18n.t('nutrition')}</Headline>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell>{i18n.t('calories')}</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.calories}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>{i18n.t('totalFat')}</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.totalFat}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>{i18n.t('sodium')}</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.sodium}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>{i18n.t('totalCarbohydrate')}</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.totalCarbohydrate}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>{i18n.t('totalSugar')}</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.totalSugar}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>{i18n.t('protein')}</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.protein}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailView: {
        backgroundColor: '#e9d1d1',
        padding: 20,
        width: '100%',
        height: '100%',
    },
    subDetailView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigPic: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    Ingredients: {
        fontWeight: '300',
    },
    nutrition: {
        paddingTop: 20,
        fontWeight: '300',
    },
});