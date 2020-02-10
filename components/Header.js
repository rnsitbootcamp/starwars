import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Block, NavBar, theme } from 'galio-framework';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

function Header({ navigation, back, title, white, transparent }) {
  const handleLeftPress = () => {
    return navigation.openDrawer();
  }

  const headerStyles = [
    styles.shadow,
    transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
  ];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={back}
        title={title}
        style={styles.navbar}
        transparent={transparent}
        leftStyle={{ flex: 0.3, paddingTop: 2  }}
        leftIconName="navicon"
        leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
        titleStyle={[
          styles.title,
          {color: theme.COLORS[white ? 'WHITE' : 'ICON']},
        ]}
        onLeftPress={handleLeftPress}
      />
    </Block>
  );
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
    backgroundColor: '#03285D'
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
