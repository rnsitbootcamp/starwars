import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block, Text, theme } from 'galio-framework';

const BASE_SIZE = theme.SIZES.BASE;

function Card({ item, horizontal, style }){
  return (
    <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/wJISaJt.jpg' }}
        style={styles.imageContainer}
      >
        <Block left flex space="between" style={styles.productDescription}>
          <Text size={BASE_SIZE * 1.125} style={styles.bold}>
            EPISODE {item.episode_id}
          </Text>
          <Text size={BASE_SIZE} style={styles.bold}>{item.title}</Text>
          <Text size={BASE_SIZE * 0.875} muted>
            {new Date(item.release_date).toDateString().slice(4, )}
          </Text>
        </Block>
        <Block left flex space="between" style={styles.productDescription}>
          <Text size={BASE_SIZE * 0.875} style={styles.title}>Director</Text>
          <Text size={BASE_SIZE * 0.775} style={styles.entity}>{item.director}</Text>
        </Block>
        <Block left flex space="between" style={styles.productDescription}>
          <Text size={BASE_SIZE * 0.875} style={styles.title}>Producer</Text>
          <Text size={BASE_SIZE * 0.775} style={styles.entity}>{item.producer.split(',')[0]}</Text>
        </Block>
      </ImageBackground>
    </Block>
  );
}

export default withNavigation(Card);

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  title: {
    color: '#03285D',
    borderRadius: 20,
    borderColor: '#03285D',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: theme.SIZES.BASE / 4,
    paddingRight: theme.SIZES.BASE / 5,
  },
  entity: {
    paddingLeft: theme.SIZES.BASE / 4,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
