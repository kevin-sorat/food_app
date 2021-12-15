import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { getHomePage } from './pages/home.js';
import { getMenuPage } from './pages/menu.js';
import { getRewardsPage } from './pages/rewards.js';
import { getMorePage } from './pages/more.js';

const HomeRoute = () => getHomePage();
const MenuRoute = () => getMenuPage();
const RewardsRoute = () => getRewardsPage();
const MoreRoute = () => getMorePage();

const MainComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'menu', title: 'Menu', icon: 'food-fork-drink' },
    { key: 'rewards', title: 'Rewards', icon: 'wallet-giftcard' },
    { key: 'more', title: 'More', icon: 'dots-horizontal' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    menu: MenuRoute,
    rewards: RewardsRoute,
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
