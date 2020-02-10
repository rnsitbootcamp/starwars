import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

const Drawer = (props) => (
  <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block flex={0.2} style={styles.header}>
      <TouchableWithoutFeedback>
        <Block style={styles.profile}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/XGQzo00WzL4Icoftl_cpogskee7YMnEMmJufCmL7Gntr-MlReH8VJA9V3vVsauNjSDVS=s180' }}
            style={styles.avatar}
          />
          <Text h5 color='white'>Star Wars</Text>
        </Block>
      </TouchableWithoutFeedback>
    </Block>
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
      </ScrollView>
    </Block>
  </Block>
);

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: 'white',
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#000',
    activeBackgroundColor: 'transparent',
    itemStyle: {
      width: width * 0.75,
      backgroundColor: 'transparent',
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: 'normal',
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#03285D',
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 40,
    width: 40,
    marginBottom: theme.SIZES.BASE,
  },
});

export default Menu;
