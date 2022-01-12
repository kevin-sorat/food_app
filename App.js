import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { getHomePage } from './pages/home.js';
import { getMenuPage } from './pages/menu.js';
import { getTranslatePage } from './pages/translate.js';
import { getMorePage } from './pages/more.js';
import * as Linking from 'expo-linking';
import i18n from 'i18n-js';

Linking.createURL('en');
Linking.createURL('ja');
Linking.createURL('th');

i18n.translations = {
  en: require('./nls/strings_en.json'),
  ja: require('./nls/strings_ja.json'),
  th: require('./nls/strings_th.json'),
};

i18n.locale = "en"; // Localization.locale;
i18n.fallbacks = true;

const MainComponent = () => {

  //console.log("MainComponent: i18n.locale: " + i18n.locale);
  //console.log("MainComponent: i18n.t('home'): " + i18n.t('home'));

  const navigationRoutes = [
    { key: 'home', title: i18n.t('home'), icon: 'home' },
    { key: 'menu', title: i18n.t('menu'), icon: 'food-fork-drink' },
    { key: 'translate', title: i18n.t('translate'), icon: 'translate' },
    { key: 'more', title: i18n.t('more'), icon: 'dots-horizontal' },
  ];

  const HomeRoute = () => getHomePage();
  const MenuRoute = () => getMenuPage();
  const TranslateRoute = () => getTranslatePage();
  const MoreRoute = () => getMorePage();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState(navigationRoutes);
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.locale);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,
    translate: TranslateRoute,
    more: MoreRoute,
  });

  const _handleIndexChange = (value) => {
    setIndex(value);
  };

  React.useEffect(() => {
    setRoutes(navigationRoutes);
  }, [i18n.locale]);

  // listen for new url events coming from Expo
  Linking.addEventListener('url', event => {
    if (event.url) {
      const parsedUrl = Linking.parse(event.url);
      // if (parsedUrl.queryParams.language && i18n.locale !== parsedUrl.queryParams.language) {
      if (parsedUrl.queryParams.language) {
        //console.log("selectedLanguage: " + selectedLanguage);
        //console.log("parsedUrl.queryParams.language: " + parsedUrl.queryParams.language);
        i18n.locale = parsedUrl.queryParams.language;
        setSelectedLanguage(i18n.locale);
      // } else if (parsedUrl.path && i18n.locale !== parsedUrl.path) {
      } else if (parsedUrl.path) {
        //console.log("selectedLanguage: " + selectedLanguage);
        //console.log("parsedUrl.path: " + parsedUrl.path);
        i18n.locale = parsedUrl.path;
        setSelectedLanguage(i18n.locale);
      }
    }
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={_handleIndexChange}
      renderScene={renderScene}
    />
  );
};

export default MainComponent;
