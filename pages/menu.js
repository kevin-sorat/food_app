import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, SectionList, StatusBar, Modal, View } from 'react-native';
import { Headline, Subheading, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { getDetailPage } from './detail.js';
import { getBagPage } from './bag.js';
import i18n from 'i18n-js';
// import chicken from '../assets/800px_COLOURBOX9177179.jpeg';

const LOGO_MAX_WIDTH = 200;
const HEADER_MAX_HEIGHT = 180;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export function getMenuPage(parsedUrl) {
    const isOrder = (parsedUrl && parsedUrl.queryParams && parsedUrl.queryParams.order === "true");
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [bagModalVisible, setBagModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });

    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item} onPress={() => {
                setSelectedItem(title);
                setDetailModalVisible(true);
            }}>
            <Image style={styles.smallPic} source={title.pic} />
            <Text style={styles.name}>{title.name}</Text>
            { title.price_1 && !title.price_2
                ?  <View style={styles.priceContainer}>
                        <View style={styles.priceSubcontainer}>
                            <Text style={styles.price}>{title.price_1}</Text>
                            { isOrder
                                ? <Button style={styles.addButton} icon='plus-circle' color="#FFFFFF" onPress={() => setBagModalVisible(true)}/>
                                : null
                            }
                        </View>
                </View> 
                : null
            }
            { title.price_1 && title.price_2 && !title.price_3
                ? <View style={styles.priceContainer}>
                    <View style={styles.priceSubcontainer}>
                        <Text style={styles.price}>{title.size_1}: {title.price_1}</Text>
                        { isOrder
                            ? <Button style={styles.addButton} icon='plus-circle' color="#FFFFFF" onPress={() => setBagModalVisible(true)}/>
                            : null
                        }
                    </View>
                    <View style={styles.priceSubcontainer}>
                        <Text style={styles.price}>{title.size_2}: {title.price_2}</Text>
                        { isOrder
                            ? <Button style={styles.addButton} icon='plus-circle' color="#FFFFFF" onPress={() => setBagModalVisible(true)}/>
                            : null
                        }
                    </View>
                </View>
                : null
            }
            { title.price_1 && title.price_2 && title.price_3
                ? <View style={styles.priceContainer}>
                    <View style={styles.priceSubcontainer}>
                        <Text style={styles.price}>{title.size_1}: {title.price_1}</Text>
                        { isOrder
                            ? <Button style={styles.addButton} icon='plus-circle' color="#FFFFFF" onPress={() => setBagModalVisible(true)}/>
                            : null
                        }
                    </View>
                    <View style={styles.priceSubcontainer}>
                        <Text style={styles.price}>{title.size_2}: {title.price_2}</Text>
                        { isOrder
                            ? <Button style={styles.addButton} icon='plus-circle' color="#FFFFFF" onPress={() => setBagModalVisible(true)}/>
                            : null
                        }
                    </View>
                    <View style={styles.priceSubcontainer}>
                        <Text style={styles.price}>{title.size_3}: {title.price_3}</Text>
                        { isOrder
                            ? <Button style={styles.addButton} icon='plus-circle' color="#FFFFFF" onPress={() => setBagModalVisible(true)}/>
                            : null
                        }
                    </View>
                </View>
                : null
            }
        </TouchableOpacity>
    );

    const MENU_DATA = [
        {
            title: i18n.t('chicken'),
            data: [
                {id: 'ch001', name: i18n.t('ch001_name'), size_1: i18n.t('ch001_size_1'), size_2: i18n.t('ch001_size_2'), price_1: i18n.t('ch001_price_1'), price_2: i18n.t('ch001_price_2'), pic: require('../assets/chicken_drumstick.png')},
                {id: 'ch002', name: i18n.t('ch002_name'), size_1: i18n.t('ch002_size_1'), size_2: i18n.t('ch002_size_2'), price_1: i18n.t('ch002_price_1'), price_2: i18n.t('ch002_price_2'), pic: require('../assets/chicken_thigh.png')},
                {id: 'ch003', name: i18n.t('ch003_name'), size_1: i18n.t('ch003_size_1'), size_2: i18n.t('ch003_size_2'), price_1: i18n.t('ch003_price_1'), price_2: i18n.t('ch003_price_2'), pic: require('../assets/chicken_wing.png')},
                // {id: 'ch004', name: i18n.t('ch004_name'), price_1: i18n.t('ch004_price_1'), pic: require('../assets/800px_COLOURBOX8625292.jpeg')},
                {id: 'ch005', name: i18n.t('ch005_name'), price_1: i18n.t('ch005_price_1'), pic: require('../assets/chicken_strips.png')},
                {id: 'ch006', name: i18n.t('ch006_name'), price_1: i18n.t('ch006_price_1'), pic: require('../assets/chicken_stick.png')},
                {id: 'ch007', name: i18n.t('ch007_name'), price_1: i18n.t('ch007_price_1'), pic: require('../assets/chicken_spicy_stick.png')},
                {id: 'ch008', name: i18n.t('ch008_name'), price_1: i18n.t('ch008_price_1'), pic: require('../assets/chicken_sesame_stick.png')},
                {id: 'ch009', name: i18n.t('ch009_name'), price_1: i18n.t('ch009_price_1'), pic: require('../assets/chicken_nuggets.png')},
                {id: 'ch010', name: i18n.t('ch010_name'), price_1: i18n.t('ch010_price_1'), pic: require('../assets/chicken_karage.png')},
                {id: 'ch011', name: i18n.t('ch011_name'), price_1: i18n.t('ch011_price_1'), pic: require('../assets/chicken_karage_rice_bowl.png')},
                {id: 'ch012', name: i18n.t('ch012_name'), price_1: i18n.t('ch012_price_1'), pic: require('../assets/chicken_special.png')},
            ]
        },
        {
            title: i18n.t('chickenEtc'),
            data: [
                {id: 'ce001', name: i18n.t('ce001_name'), price_1: i18n.t('ce001_price_1'), pic: require('../assets/chicken_gizzards.png')},
                {id: 'ce002', name: i18n.t('ce002_name'), price_1: i18n.t('ce002_price_1'), pic: require('../assets/chicken_livers.png')},
                {id: 'ce003', name: i18n.t('ce003_name'), price_1: i18n.t('ce003_price_1'), pic: require('../assets/chicken_hearts.png')},
                {id: 'ce004', name: i18n.t('ce004_name'), price_1: i18n.t('ce004_price_1'), pic: require('../assets/giblet_sampler.png')},
            ]
        },
        {
            title: i18n.t('seafood'),
            data: [
                {id: 'sf001', name: i18n.t('sf001_name'), price_1: i18n.t('sf001_price_1'), pic: require('../assets/tempura_shrimps.png')},
                {id: 'sf002', name: i18n.t('sf002_name'), price_1: i18n.t('sf002_price_1'), pic: require('../assets/butterfly_shrimps.png')},
                {id: 'sf003', name: i18n.t('sf003_name'), price_1: i18n.t('sf003_price_1'), pic: require('../assets/codfish.png')},
                {id: 'sf004', name: i18n.t('sf004_name'), price_1: i18n.t('sf004_price_1'), pic: require('../assets/calamari.png')},
                {id: 'sf005', name: i18n.t('sf005_name'), price_1: i18n.t('sf005_price_1'), pic: require('../assets/seafood_sampler.png')},
                {id: 'sf006', name: i18n.t('sf006_name'), price_1: i18n.t('sf006_price_1'), pic: require('../assets/french_fries.png')},
            ]
        },
        {
            title: i18n.t('sideOrders'),
            data: [
                {id: 'so001', name: i18n.t('so001_name'), price_1: i18n.t('so001_price_1'), pic: require('../assets/french_fries.png')},
                {id: 'so002', name: i18n.t('so002_name'), price_1: i18n.t('so002_price_1'), pic: require('../assets/corndog.png')},
                {id: 'so003', name: i18n.t('so003_name'), price_1: i18n.t('so003_price_1'), pic: require('../assets/steamed_rice.png')},
                {id: 'so004', name: i18n.t('so004_name'), price_1: i18n.t('so004_price_1'), pic: require('../assets/chicken_fried_rice.png')},
                {id: 'so005', name: i18n.t('so005_name'), price_1: i18n.t('so005_price_1'), pic: require('../assets/crab_rice_ball.png')},
                {id: 'so006', name: i18n.t('so006_name'), price_1: i18n.t('so006_price_1'), pic: require('../assets/spam_musubi.png')},
                {id: 'so007', name: i18n.t('so007_name'), price_1: i18n.t('so007_price_1'), pic: require('../assets/crab_cheese_puffs.png')},
                {id: 'so008', name: i18n.t('so008_name'), price_1: i18n.t('so008_price_1'), pic: require('../assets/chicken_egg_rolls.png')},
                {id: 'so009', name: i18n.t('so009_name'), price_1: i18n.t('so009_price_1'), pic: require('../assets/mozzarella_sticks.png')},
                {id: 'so010', name: i18n.t('so010_name'), price_1: i18n.t('so010_price_1'), pic: require('../assets/churro.png')},
            ]
        },
        {
            title: i18n.t('sauces'),
            data: [
                {id: 'sa001', name: i18n.t('sa001_name'), price_1: i18n.t('sa001_price_1'), pic: require('../assets/sauces.png')},
            ]
        },
        {
            title: i18n.t('drinks'),
            data: [
                {id: 'dr001', name: i18n.t('dr001_name'), size_1: i18n.t('dr001_size_1'), size_2: i18n.t('dr001_size_2'), size_3: i18n.t('dr001_size_3'), price_1: i18n.t('dr001_price_1'), price_2: i18n.t('dr001_price_2'), price_3: i18n.t('dr001_price_3'), pic: require('../assets/icon.png')},
                {id: 'dr002', name: i18n.t('dr002_name'), price_1: i18n.t('dr002_price_1'), pic: require('../assets/icon.png')},
                {id: 'dr003', name: i18n.t('dr003_name'), price_1: i18n.t('dr003_price_1'), pic: require('../assets/icon.png')},
                {id: 'dr004', name: i18n.t('dr004_name'), size_1: i18n.t('dr004_size_1'), size_2: i18n.t('dr004_size_2'), price_1: i18n.t('dr004_price_1'), price_2: i18n.t('dr004_price_2'), pic: require('../assets/icon.png')},
                {id: 'dr005', name: i18n.t('dr005_name'), size_1: i18n.t('dr005_size_1'), size_2: i18n.t('dr005_size_2'), price_1: i18n.t('dr005_price_1'), price_2: i18n.t('dr005_price_2'), pic: require('../assets/icon.png')},
            ]
        },
    ];

    let numItems = 0;
    let totalPrice = 0;

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType='slide'
                transparent={false}
                visible={detailModalVisible}
                onRequestClose={() => {
                    // Alert.alert('Detail modal has been closed.');
                    setDetailModalVisible(!detailModalVisible);
                }}
            >
                <SafeAreaView style={styles.modalView}>
                    <AntDesign style={styles.closeButton} name='closecircleo' size={32} color='black' onPress={() => setDetailModalVisible(!detailModalVisible)} />
                    {getDetailPage(selectedItem)}
                </SafeAreaView>
            </Modal>

            <Modal
                animationType='slide'
                transparent={false}
                visible={bagModalVisible}
                onRequestClose={() => {
                    // Alert.alert('Bag modal has been closed.');
                    setBagModalVisible(!bagModalVisible);
                }}
            >
                <SafeAreaView style={styles.modalView}>
                    <AntDesign style={styles.closeButton} name='closecircleo' size={32} color='black' onPress={() => setBagModalVisible(!bagModalVisible)} />
                    {getBagPage()}
                </SafeAreaView>
            </Modal>

            <Animated.View style={[styles.headerContainer, {height: headerHeight}]}>
                { isOrder
                    ?   <View style={styles.bagContainer}>
                            <View style={styles.amountContainer}>
                                <Text style={styles.bagLabel}>No. of Items : {numItems}</Text>
                                <Text style={styles.bagLabel}>Price : ${totalPrice}</Text>
                            </View>
                            <Button style={styles.bagButton} icon='basket' color="#FFFFFF" labelStyle={{fontSize: 20}} onPress={() => setBagModalVisible(true)}/>
                        </View>
                    : null
                }
                <Image style={styles.bigPic} source={require('../assets/chicken_valley_logo.png')} />
            </Animated.View>

            <Animated.SectionList
                style={[styles.scrollViewContent, {marginTop: headerHeight}]}
                sections={MENU_DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}]
                )}
            />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        flex: 1,
    },
    bagContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 180,
        height: 60,
        // backgroundColor: '#a74545',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    amountContainer: {
        flexDirection: 'column',
        flex: 0.7,
        // backgroundColor: '#ffffff',
    },
    bagLabel: {
        flex: 1,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 12,
    },
    bagButton: {
        marginLeft: -6,
        marginRight: -20,
        flex: 0.3,
    },
    bigPic: {
        width: LOGO_MAX_WIDTH,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'contain',
        flex: 1,
    },
    scrollViewContent: {
        flex: 1,
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
        fontSize: 14,
        flex: 0.4,
        paddingLeft: 10,
        fontWeight: '600',
    },
    priceContainer: {
        flexDirection: 'column',
        flex: 0.4,
    },
    priceSubcontainer: {
        flexDirection: 'row',
        flex: 1,
    },
    price: {
        color: '#E6E6E6',
        fontSize: 14,
        flex: 0.9,
        textAlign: 'right',
    },
    addButton: {
        flex: 0.1,
        alignSelf: 'flex-end',
        minWidth: 32,
        alignItems: 'baseline',
    },
    header: {
        color: '#E6E6E6',
        fontSize: 18,
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