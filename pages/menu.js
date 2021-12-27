import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
    {
        title: "Chicken",
        data: [
            {name: "Drum stick", price: "$6.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Thigh", price: "$5.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Wings", price: "$7.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Breast", price: "$6.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Strips", price: "$9.68/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Chicken stick", price: "$5.47", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Spicy hot stick", price: "$5.47", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Chicken special", price: "$7.82", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Chicken etc.",
        data: [
            {name: "Gizzards", price: "$7.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Livers", price: "$7.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Hearts", price: "$8.99/lb", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Seafood",
        data: [
            {name: "Tempura shrimps (5 pcs)", price: "$7.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Butterfly shrimps (5 pcs)", price: "$5.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Cod fish (3 pcs)", price: "$6.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Calamari", price: "$5.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Add fries", price: "$1.00", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Side orders",
        data: [
            {name: "French fries", price: "$2.25", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Corn dog", price: "$2.51", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Steamed rice", price: "$2.75", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
    {
        title: "Drinks",
        data: [
            {name: "Bottle water", price: "$1.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Fountain soda", price: "$1.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Bottle/can soda", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Lemonade", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Pink lemonade", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
            {name: "Strawberry lemonade", price: "$2.99", pic: require('../assets/800px_COLOURBOX9177179.jpeg')},
        ]
    },
];

const Item = ({ title }) => (
    <TouchableOpacity style={styles.item} onPress={() => {console.log("Hello World!!!");}}>
        <Image style={styles.smallPic} source={title.pic} />
        <Text style={styles.name}>{title.name}</Text>
        <Text style={styles.price}>{title.price}</Text>
    </TouchableOpacity>
);

export function getMenuPage() {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
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
        fontWeight: "bold",
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
});