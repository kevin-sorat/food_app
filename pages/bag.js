import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { Headline, Subheading, Text } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { calculateNumItemsAndPrice } from '../utils/helper.js';
import i18n from 'i18n-js';

export function getBagPage(shoppingBag, setShoppingBag) {
    // const [shoppingBag, setShoppingBag] = useState(inputShoppingBag);
    const [totalPrice, setTotalPrice] = useState(0);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        let result = calculateNumItemsAndPrice(shoppingBag);
        setTotalPrice(result.totalPrice);
    });

    const _handleValueChange = (value, item) => {
        if (value === "0" || value === 0) {
            shoppingBag.splice(shoppingBag.indexOf(item), 1);
        } else {
            item.quantity = parseInt(value);
        }
        setShoppingBag(shoppingBag);
        forceUpdate();
    };

    const Item = ({ item }) => (
        <View style={styles.bagItem}>
            { item.size
                ? <Text style={styles.columnItem}>{item.size} {item.name}</Text>
                : <Text style={styles.columnItem}>{item.name}</Text>
            }
            <Text style={styles.columnItem}>{"$" + item.price.toFixed(2) + " per item"}</Text>
            <View style={styles.columnItem}>
                <Text>{"Quantity:"}</Text>
                <Picker
                    style={{ width: 50, height: 20, backgroundColor: '#e1e1e1', marginLeft: 6 }}
                    selectedValue={item.quantity.toString()}
                    onValueChange={(value) => _handleValueChange(value, item)}>
                    <Picker.Item label='0' />
                    <Picker.Item label='1' />
                    <Picker.Item label='2' />
                    <Picker.Item label='3' />
                    <Picker.Item label='4' />
                    <Picker.Item label='5' />
                    <Picker.Item label='6' />
                    <Picker.Item label='7' />
                    <Picker.Item label='8' />
                    <Picker.Item label='9' />
                    <Picker.Item label='10' />
                </Picker>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.bagView}>
            <Headline style={styles.bagHeadline}>Your items</Headline>
            {   shoppingBag.length > 0
                ? <FlatList
                    style={styles.bagScrollViewContent}
                    data={shoppingBag}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
                : <View style={styles.bagViewContent}>
                    <Text>You have no items in the bag.</Text>
                </View>
            }
            <View style={styles.bagBottomContainer}>
                <Subheading style={styles.bottomText}>Subtotal</Subheading>
                <Text style={styles.bottomText}>{"$" + totalPrice.toFixed(2)}</Text>
                <View style={styles.bagButtonContainer}>
                    <Button style={styles.checkoutButton} mode='contained' disabled={true}>
                        checkout
                    </Button>
                    <Button style={styles.trashButton} icon='trash-can' labelStyle={{fontSize: 20}}
                        disabled={shoppingBag.length <= 0} onPress={() => setShoppingBag([])} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bagView: {
        backgroundColor: '#e9d1d1',
        padding: 20,
        width: '100%',
        height: '100%',
    },
    bagHeadline: {
        padding: 10,
        textAlign: 'center',
    },
    bagItem: {
        flexDirection: 'row',
        padding: 10,
    },
    columnItem: {
        flexDirection: 'row',
        flex: 0.33,
    },
    bagScrollViewContent: {
        flex: 0.7,
        padding: 10,
    },
    bagViewContent: {
        flex: 0.7,
        padding: 10,
        alignItems: 'center',
        marginTop: 80,
    },
    bagBottomContainer: {
        flex: 0.3,
        padding: 10,
    },
    bottomText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
    },
    bagButtonContainer: {
        paddingTop: 30,
        alignItems: 'center'
    },
    checkoutButton: {
    },
    trashButton: {
        position: 'absolute',
        bottom: 8,
        right: -20,
        minWidth: 32,
    }
});