import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList, pulltoRefresh } from '../actions';
import ListScreen from '../screens/List';

export default function List({ navigation: { state: { routeName }} }) {
    const dispatch = useDispatch();
    const list = useSelector(({ list }) => list[routeName]);
    const fetchList = nextPage => dispatch(getList({ url: `/${routeName}${nextPage || list.nextPage}` }));

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <ListScreen
            list={list.data.sort(({ episode_id: first }, { episode_id: second}) => first - second)}
            pullToRefresh={list.pullToRefresh}
            handleRefresh={() => dispatch(pulltoRefresh(routeName)) && fetchList('?')}
            getList={() => list.nextPage && fetchList()}
            loading={list.loading}
        />
    );
};
