import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readSearch } from '../../modules/search';

const SearchResultContainer = ({ match, history }) => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { tag } = match.params;
    const dispatch = useDispatch();
    const { serach, error, loading } = useSelector(
        ({ search, loading, user }) => ({
            search: search.search,
            error: search.error,
            loading: loading['search/READ_SEARCH'],
        }),
    );

    useEffect(() => {
        dispatch(readSearch(tag));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            //dispatch(unloadPost());
        };
    }, [dispatch, tag]);

    return (
        <>
            <div>
dddd
            </div>
        </>
        // <PostViewer
        //   post={post}
        //   loading={loading}
        //   error={error}
        //   actionButtons={
        //     ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
        //   }
        // />
    );
};

export default withRouter(SearchResultContainer);