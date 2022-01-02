import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, SectionList, StatusBar, Modal, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { getDetailPage } from './detail.js';
// import chicken from '../assets/800px_COLOURBOX9177179.jpeg';

const MENU_DATA = [
    {
        title: "Chicken",
        data: [
            {id: "ch001", name: "Drum stick", price: "$6.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "ch002", name: "Thigh", price: "$5.99/lb", pic: require('../assets/800px_COLOURBOX9177162.jpeg')},
            {id: "ch003", name: "Wings", price: "$7.99/lb", pic: require('../assets/800px_COLOURBOX8687013.jpeg')},
            {id: "ch004", name: "Breast", price: "$6.99/lb", pic: require('../assets/800px_COLOURBOX8625292.jpeg')},
            {id: "ch005", name: "Strips", price: "$9.68/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "ch006", name: "Chicken stick", price: "$5.47", pic: require('../assets/800px_COLOURBOX9177162.jpeg')},
            {id: "ch007", name: "Spicy hot stick", price: "$5.47", pic: require('../assets/800px_COLOURBOX8687013.jpeg')},
            {id: "ch008", name: "Chicken special", price: "$7.82", pic: require('../assets/800px_COLOURBOX8625292.jpeg')},
        ]
    },
    {
        title: "Chicken etc.",
        data: [
            {id: "ce001", name: "Gizzards", price: "$7.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "ce002", name: "Livers", price: "$7.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "ce003", name: "Hearts", price: "$8.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Seafood",
        data: [
            {id: "sf001", name: "Tempura shrimps (5 pcs)", price: "$7.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "sf002", name: "Butterfly shrimps (5 pcs)", price: "$5.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "sf003", name: "Cod fish (3 pcs)", price: "$6.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "sf004", name: "Calamari", price: "$5.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "sf005", name: "Add fries", price: "$1.00", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Side orders",
        data: [
            {id: "so001", name: "French fries", price: "$2.25", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "so002", name: "Corn dog", price: "$2.51", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "so003", name: "Steamed rice", price: "$2.75", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Drinks",
        data: [
            {id: "dr001", name: "Bottle water", price: "$1.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "dr002", name: "Fountain soda", price: "$1.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "dr003", name: "Bottle/can soda", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "dr004", name: "Lemonade", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "dr005", name: "Pink lemonade", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {id: "dr006", name: "Strawberry lemonade", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
];

export function getMenuPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItemID, setSelectedItemID] = useState("");
    const [selectedItemName, setSelectedItemName] = useState("");
    const [selectedItemPrice, setSelectedItemPrice] = useState("");
    const [selectedItemPic, setSelectedItemPic] = useState("");

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

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <SafeAreaView style={styles.modalView}>
                    <AntDesign style={styles.closeButton} name="closecircleo" size={32} color="black" onPress={() => setModalVisible(!modalVisible)} />
                    {getDetailPage(selectedItemID, selectedItemName, selectedItemPrice, selectedItemPic)}
                </SafeAreaView>
            </Modal>

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
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#bdc6ff",
        padding: 10,
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    smallPic: {
        width: 50,
        height: 50,
        flex: 0.2,
    },
    name: {
        fontSize: 16,
        flex: 0.6,
        paddingLeft: 10,
        fontWeight: "600",
    },
    price: {
        fontSize: 16,
        flex: 0.2,
    },
    header: {
        fontSize: 24,
        marginVertical: 8,
        paddingTop: 16
    },

    // For modal
    // ------------------------------
    modalView: {
        flex: 1,
    },
    closeButton: {
        marginLeft: 10,
    }
    // ------------------------------
});