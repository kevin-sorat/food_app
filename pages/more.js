import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { Title, Headline, Subheading, Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import i18n from 'i18n-js';

const address = '1507 Pike Pl, Seattle, WA 98101';
const phoneNumber = '(206) 624-0595';
const businessHours = '9:00 am - 6:00 pm';

var mapURL = 'https://www.google.com/maps/place/Chicken+Valley/@47.6086608,-122.343135,17z/data=!3m1!4b1!4m5!3m4!1s0x54906b5ec1a299f5:0x191b1f48d4e302a9!8m2!3d47.6086572!4d-122.3409463';
const isMobileApp = Platform && (Platform.OS === 'ios' || Platform.OS === 'android');
if (isMobileApp) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = '47.608780144844424,-122.34047423281696';
    const label = 'Chicken Valley';
    mapURL = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });
}

export function getMorePage() {
    return (
        <SafeAreaView style={styles.container}>
            <Headline style={styles.content}>
                {i18n.t('moreInfo')}
            </Headline>
            <View style={styles.section}>
                <View style={styles.leftSection}>
                    <Title>{i18n.t('address')}</Title>
                    <Subheading>{address}</Subheading>
                </View>
                <View style={styles.rightSection}>
                    <Button icon='directions' mode='outlined' onPress={() => isMobileApp ? Linking.openURL(mapURL) : window.open(mapURL, '_blank')}>
                        {i18n.t('directions')}
                    </Button>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.leftSection}>
                    <Title>{i18n.t('phone')}</Title>
                    <Subheading>{phoneNumber}</Subheading>
                </View>
                <View style={styles.rightSection}>
                    <Button icon='phone' mode='outlined' onPress={() =>  Linking.openURL(`tel:${phoneNumber}`)}>
                        {i18n.t('call')}
                    </Button>
                </View>
            </View>
            <View style={styles.section}>
                <Title>{i18n.t('businessHours')}</Title>
            </View>
            <View style={styles.hoursSection}>
                <View style={styles.hoursLeftSection}>
                    <Subheading>{i18n.t('monday')}</Subheading>
                    <Subheading>{i18n.t('tuesday')}</Subheading>
                    <Subheading>{i18n.t('wednesday')}</Subheading>
                    <Subheading>{i18n.t('thursday')}</Subheading>
                    <Subheading>{i18n.t('friday')}</Subheading>
                    <Subheading>{i18n.t('saturday')}</Subheading>
                    <Subheading>{i18n.t('sunday')}</Subheading>
                </View>
                <View style={styles.hoursRightSection}>
                    <Subheading>{businessHours}</Subheading>
                    <Subheading>{businessHours}</Subheading>
                    <Subheading>{businessHours}</Subheading>
                    <Subheading>{businessHours}</Subheading>
                    <Subheading>{businessHours}</Subheading>
                    <Subheading>{businessHours}</Subheading>
                    <Subheading>{businessHours}</Subheading>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    section: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginTop: 20,
    },
    hoursSection: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
    },
    leftSection: {
        flex: 0.6,
        padding: 2,
    },
    hoursLeftSection: {
        flex: 0.5,
    },
    rightSection: {
        flex: 0.4,
        justifyContent: 'center',
        padding: 2,
    },
    hoursRightSection: {
        flex: 0.5,
        alignItems: 'center',
    },
});