import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
    {
        title: "Chicken",
        data: [
            {name: "Drum stick", price: "$6.99/lb"},
            {name: "Thigh", price: "$5.99/lb"},
            {name: "Wings", price: "$7.99/lb"},
            {name: "Breast", price: "$6.99/lb"},
            {name: "Strips", price: "$9.68/lb"},
            {name: "Chicken stick", price: "$5.47"},
            {name: "Spicy hot stick", price: "$5.47"},
            {name: "Chicken special", price: "$7.82"},
        ]
    },
    {
        title: "Chicken etc.",
        data: [
            {name: "Gizzards", price: "$7.99/lb"},
            {name: "Livers", price: "$7.99/lb"},
            {name: "Hearts", price: "$8.99/lb"},
        ]
    },
    {
        title: "Seafood",
        data: [
            {name: "Tempura shrimps (5 pcs)", price: "$7.99"},
            {name: "Butterfly shrimps (5 pcs)", price: "$5.99"},
            {name: "Cod fish (3 pcs)", price: "$6.99"},
            {name: "Calamari", price: "$5.99"},
            {name: "Add fries", price: "$1.00"},
        ]
    },
    {
        title: "Side orders",
        data: [
            {name: "French fries", price: "$2.25"},
            {name: "Corn dog", price: "$2.51"},
            {name: "Steamed rice", price: "$2.75"},
        ]
    },
    {
        title: "Drinks",
        data: [
            {name: "Bottle water", price: "$1.99"},
            {name: "Fountain soda", price: "$1.99"},
            {name: "Bottle/can soda", price: "$2.99"},
            {name: "Lemonade", price: "$2.99"},
            {name: "Pink lemonade", price: "$2.99"},
            {name: "Strawberry lemonade", price: "$2.99"},
        ]
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{title.name}</Text>
        <Text style={styles.price}>{title.price}</Text>
    </View>
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
        marginVertical: 8
    },
    header: {
        fontSize: 24,
        marginVertical: 8,
        paddingTop: 16
    },
    name: {
        fontSize: 16
    },
    price: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 16
    }
});