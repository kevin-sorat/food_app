import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, SectionList, StatusBar, Modal, View } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { getDetailPage } from './detail.js';
import i18n from 'i18n-js';
// import chicken from '../assets/800px_COLOURBOX9177179.jpeg';

export function getMenuPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItemID, setSelectedItemID] = useState('');
    const [selectedItemName, setSelectedItemName] = useState('');
    const [selectedItemPrice, setSelectedItemPrice] = useState('');
    const [selectedItemPic, setSelectedItemPic] = useState('');

    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item} onPress={() => {
                setSelectedItemID(title.id);
                setSelectedItemName(title.name);
                setSelectedItemPrice(title.price);
                setSelectedItemPic(title.pic);
                setModalVisible(true);
            }}>
            <Image style={styles.smallPic} source={title.pic} />
            <Text style={styles.name}>{title.name}</Text>
            <Text style={styles.price}>{title.price}</Text>
        </TouchableOpacity>
    );

    const MENU_DATA = [
        {
            title: i18n.t('chicken'),
            data: [
                {id: 'ch001', name: i18n.t('ch001_name'), price: i18n.t('ch001_price'), pic: require('../assets/chicken_drumstick.png')},
                {id: 'ch002', name: i18n.t('ch002_name'), price: i18n.t('ch002_price'), pic: require('../assets/chicken_thigh.png')},
                {id: 'ch003', name: i18n.t('ch003_name'), price: i18n.t('ch003_price'), pic: require('../assets/chicken_wing.png')},
                // {id: 'ch004', name: i18n.t('ch004_name'), price: i18n.t('ch004_price'), pic: require('../assets/800px_COLOURBOX8625292.jpeg')},
                {id: 'ch005', name: i18n.t('ch005_name'), price: i18n.t('ch005_price'), pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'ch006', name: i18n.t('ch006_name'), price: i18n.t('ch006_price'), pic: require('../assets/chicken_stick.png')},
                {id: 'ch007', name: i18n.t('ch007_name'), price: i18n.t('ch007_price'), pic: require('../assets/chicken_spicy_stick.png')},
                {id: 'ch008', name: i18n.t('ch008_name'), price: i18n.t('ch008_price'), pic: require('../assets/chicken_sesame_stick.png')},
                {id: 'ch009', name: i18n.t('ch009_name'), price: i18n.t('ch009_price'), pic: require('../assets/800px_COLOURBOX8625292.jpeg')},
                {id: 'ch010', name: i18n.t('ch010_name'), price: i18n.t('ch010_price'), pic: require('../assets/chicken_karage.png')},
                {id: 'ch011', name: i18n.t('ch011_name'), price: i18n.t('ch011_price'), pic: require('../assets/chicken_nuggets.png')},
            ]
        },
        {
            title: i18n.t('chickenEtc'),
            data: [
                {id: 'ce001', name: i18n.t('ce001_name'), price: i18n.t('ce001_price'), pic: require('../assets/chicken_gizzards.png')},
                {id: 'ce002', name: i18n.t('ce002_name'), price: i18n.t('ce002_price'), pic: require('../assets/chicken_livers.png')},
                {id: 'ce003', name: i18n.t('ce003_name'), price: i18n.t('ce003_price'), pic: require('../assets/chicken_hearts.png')},
            ]
        },
        {
            title: i18n.t('seafood'),
            data: [
                {id: 'sf001', name: i18n.t('sf001_name'), price: '$7.99', pic: require('../assets/tempura_shrimps.png')},
                {id: 'sf002', name: i18n.t('sf002_name'), price: '$5.99', pic: require('../assets/butterfly_shrimps.png')},
                {id: 'sf003', name: i18n.t('sf003_name'), price: '$6.99', pic: require('../assets/codfish.png')},
                {id: 'sf004', name: i18n.t('sf004_name'), price: '$5.99', pic: require('../assets/calamari.png')},
                {id: 'sf005', name: i18n.t('sf005_name'), price: '$7.99', pic: require('../assets/seafood_sampler.png')},
                {id: 'sf006', name: i18n.t('sf006_name'), price: '$1.00', pic: require('../assets/french_fries.png')},
            ]
        },
        {
            title: i18n.t('sideOrders'),
            data: [
                {id: 'so001', name: i18n.t('so001_name'), price: '$2.25', pic: require('../assets/french_fries.png')},
                {id: 'so002', name: i18n.t('so002_name'), price: '$3.63', pic: require('../assets/corndog.png')},
                {id: 'so003', name: i18n.t('so003_name'), price: '$2.75', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'so004', name: i18n.t('so004_name'), price: '$8.49', pic: require('../assets/chicken_fried_rice.png')},
                {id: 'so005', name: i18n.t('so005_name'), price: '$5.00', pic: require('../assets/crab_riceball.png')},
                {id: 'so006', name: i18n.t('so006_name'), price: '$4.08', pic: require('../assets/spam_musubi.png')},
                {id: 'so007', name: i18n.t('so007_name'), price: '$3.18', pic: require('../assets/churro.png')},
            ]
        },
        {
            title: i18n.t('drinks'),
            data: [
                {id: 'dr001', name: i18n.t('dr001_name'), price: '$1.99', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'dr002', name: i18n.t('dr002_name'), price: '$1.99', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'dr003', name: i18n.t('dr003_name'), price: '$2.99', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'dr004', name: i18n.t('dr004_name'), price: '$2.99', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'dr005', name: i18n.t('dr005_name'), price: '$2.99', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
                {id: 'dr006', name: i18n.t('dr006_name'), price: '$2.99', pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            ]
        },
    ];    

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <SafeAreaView style={styles.modalView}>
                    <AntDesign style={styles.closeButton} name='closecircleo' size={32} color='black' onPress={() => setModalVisible(!modalVisible)} />
                    {getDetailPage(selectedItemID, selectedItemName, selectedItemPrice, selectedItemPic)}
                </SafeAreaView>
            </Modal>

            <View style={styles.headerContainer}>
                <Image style={styles.bigPic} source={require('../assets/chicken_valley_logo.png')} />
            </View>

            <SectionList
                sections={MENU_DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bigPic: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    container: {
        backgroundColor: '#911717',
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    headerContent: {
        fontWeight: 500,
        fontSize: 30,
        fontFamily: 'lucida grande',
    },
    item: {
        backgroundColor: '#a74545',
        padding: 10,
        marginHorizontal: 16,
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
    },
    smallPic: {
        width: 60,
        height: 60,
        flex: 0.2,
        borderRadius: 6,
        resizeMode: 'contain',
    },
    name: {
        color: '#E6E6E6',
        fontSize: 16,
        flex: 0.6,
        paddingLeft: 10,
        fontWeight: '600',
    },
    price: {
        color: '#E6E6E6',
        fontSize: 16,
        flex: 0.2,
    },
    header: {
        color: '#E6E6E6',
        fontSize: 24,
        marginHorizontal: 16,
        marginVertical: 8,
        paddingTop: 16
    },

    // For modal
    // ------------------------------
    modalView: {
        backgroundColor: '#a74545',
        flex: 1,
    },
    closeButton: {
        color: '#E6E6E6',
        marginLeft: 10,
        padding: 10,
    }
    // ------------------------------
});