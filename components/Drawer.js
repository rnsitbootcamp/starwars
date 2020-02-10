import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, Icon, theme } from "galio-framework";

import materialTheme from '../constants/Theme';

export default function DrawerItem({ title, focused }) {
  
  return (
    <Block flex row style={[styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null]}>
      <Block middle flex={0.1} style={{ marginRight: 28 }}>
        <Icon
            size={18}
            name="md-arrow-dropright-circle"
            family="ionicon"
            color={focused ? 'white' : materialTheme.COLORS.MUTED} />
      </Block>
      <Block row center flex={0.9}>
        <Text size={18} color={focused ? 'white' : 'black'}>
          {title}
        </Text>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    // backgroundColor: materialTheme.COLORS.ACTIVE,
    backgroundColor: '#03285D',
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
})