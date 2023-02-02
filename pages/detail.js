import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Headline, Subheading, Text, DataTable } from 'react-native-paper';
import i18n from 'i18n-js';

export function getDetailPage(selectedItem) {

    if (!selectedItem) {
        return;
    }

    const selectedDetail = {
        name: i18n.t(selectedItem.id + "_name"),
        description: i18n.t(selectedItem.id + "_description"),
        calories: i18n.t(selectedItem.id + "_calories"),
        totalFat: i18n.t(selectedItem.id + "_totalFat"),
        sodium: i18n.t(selectedItem.id + "_sodium"),
        totalCarbohydrate: i18n.t(selectedItem.id + "_totalCarbohydrate"),
        totalSugar: i18n.t(selectedItem.id + "_totalSugar"),
        protein: i18n.t(selectedItem.id + "_protein")
    };

    let isDescription = (selectedDetail.description && selectedDetail.description !== "--" ); 

    return (
        <ScrollView style={styles.detailView}>
            <Headline>{selectedItem.name}</Headline>
            { !selectedItem.size_1 && selectedItem.price_1
                ? <Subheading>{selectedItem.price_1}</Subheading>
                : null
            }
            { selectedItem.size_1 && selectedItem.price_1
                ? <Subheading>{selectedItem.size_1}: {selectedItem.price_1}</Subheading>
                : null
            }
            { selectedItem.size_2 && selectedItem.price_2
                ? <Subheading>{selectedItem.size_2}: {selectedItem.price_2}</Subheading>
                : null
            }
            { selectedItem.size_3 && selectedItem.price_3
                ? <Subheading>{selectedItem.size_3}: {selectedItem.price_3}</Subheading>
                : null
            }
            <View style={styles.subDetailView}>
                <Image style={styles.bigPic} source={selectedItem.pic} />
                { isDescription ? <Headline style={styles.description}>{i18n.t('description')}</Headline> : null }
                { isDescription ? <Text>{selectedDetail.description}</Text> : null }
            </View>
        </ScrollView>
    );

    /*
    return (
        <ScrollView style={styles.detailView}>
            <Headline>{selectedItemName}</Headline>
            <Subheading>{selectedItemPrice}</Subheading>
            <View style={styles.subDetailView}>
                <Image style={styles.bigPic} source={selectedItemPic} />
                <Headline style={styles.description}>{i18n.t('description')}</Headline>
                <Text>{selectedDetail.description}</Text>
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
    */
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
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
    description: {
        fontWeight: '300',
    },
    nutrition: {
        paddingTop: 20,
        fontWeight: '300',
    },
});