import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { getHomePage } from './pages/home.js';
import { getMenuPage } from './pages/menu.js';
import { getTranslatePage } from './pages/translate.js';
import { getMorePage } from './pages/more.js';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: require('./nls/strings_en.json'),
  ja: require('./nls/strings_ja.json'),
};

i18n.locale = "en"; // Localization.locale;
i18n.fallbacks = true;

const MainComponent = () => {

  console.log("MainComponent: i18n.locale: " + i18n.locale);
  console.log("MainComponent: i18n.t('home'): " + i18n.t('home'));

  const HomeRoute = () => getHomePage();
  const MenuRoute = () => getMenuPage();
  const TranslateRoute = () => getTranslatePage();
  const MoreRoute = () => getMorePage();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: i18n.t('home'), icon: 'home' },
    { key: 'menu', title: i18n.t('menu'), icon: 'food-fork-drink' },
    { key: 'translate', title: i18n.t('translate'), icon: 'translate' },
    { key: 'more', title: i18n.t('more'), icon: 'dots-horizontal' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,
    translate: TranslateRoute,
    more: MoreRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainComponent;
