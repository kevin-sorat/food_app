import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Headline, Subheading, Text, DataTable } from 'react-native-paper';

const DETAIL_DATA = [
    {
        id: 'ch000',
        ingredients: 'Chicken Meat, Flour, Egg Yolks',
        calories: '200Cal',
        totalFat: '20g',
        sodium: '500mg',
        totalCarbohydrate: '20g',
        totalSugar: '0g',
        protein: '20g',
    },
    {
        id: 'ch001',
        ingredients: 'Chicken Leg, Flour, Egg Yolks',
        calories: '159Cal',
        totalFat: '20g',
        sodium: '500mg',
        totalCarbohydrate: '20g',
        totalSugar: '0g',
        protein: '25g',
    },
    {
        id: 'ch002',
        ingredients: 'Chicken Thigh, Flour, Egg Yolks',
        calories: '200Cal',
        totalFat: '40g',
        sodium: '500mg',
        totalCarbohydrate: '20g',
        totalSugar: '0g',
        protein: '20g',
    },
    {
        id: 'ch003',
        ingredients: 'Chicken Wing, Flour, Egg Yolks',
        calories: '100Cal',
        totalFat: '30g',
        sodium: '500mg',
        totalCarbohydrate: '20g',
        totalSugar: '0g',
        protein: '10g',
    },
];

export function getDetailPage(selectedItemID, selectedItemName, selectedItemPrice, selectedItemPic) {

    if (!selectedItemID) {
        return;
    }

    let selectedDetail = DETAIL_DATA.find(detail => detail.id === selectedItemID);
    if (!selectedDetail) {
        selectedDetail = DETAIL_DATA[0];
    }

    return (
        <ScrollView style={styles.detailView}>
            <Headline>{selectedItemName}</Headline>
            <Subheading>{selectedItemPrice}</Subheading>
            <View style={styles.subDetailView}>
                <Image style={styles.bigPic} source={selectedItemPic} />
                <Headline style={styles.Ingredients}>Ingredients</Headline>
                <Text>{selectedDetail.ingredients}</Text>
                <Headline style={styles.nutrition}>Nutrition</Headline>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell>Calories</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.calories}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Total Fat</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.totalFat}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Sodium</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.sodium}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Total Carbohydrate</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.totalCarbohydrate}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Total Sugar</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.totalSugar}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Protein</DataTable.Cell>
                        <DataTable.Cell numeric>{selectedDetail.protein}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailView: {
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