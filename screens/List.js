import React from 'react';
import { 
    StyleSheet,
    Dimensions,
    FlatList,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';

const { width } = Dimensions.get('screen');

const renderItem = ({ item }) => (<Card item={item} horizontal />);

export default function List({
    pullToRefresh,
    handleRefresh,
    list,
    getList,
    loading,
}) {
    return (
        <Block flex center style={styles.list}>
            {loading && 
                <ActivityIndicator style={styles.loader} size='large' color='#03285D' />
            }
            <SafeAreaView style={styles.items}>
                <FlatList
                    refreshing = {pullToRefresh}
                    onRefresh={handleRefresh}
                    data={list}
                    keyExtractor={({ url }) => url}
                    renderItem={renderItem}
                    onEndReachedThreshold={2}
                    onEndReached={({ distanceFromEnd }) => {
                    if (distanceFromEnd > 0) {
                        //call API to get next page
                        getList();
                    }
                    }}
                />
            </SafeAreaView>
        </Block>
    );
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    list: {
        width: width, 
    },
    items: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
    },
});
