import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readSearch } from '../../modules/search';
import GraphViewer from '../../components/graph/GraphViewer';

const SearchResultContainer = ({ match, history }) => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { tag } = match.params;
    const dispatch = useDispatch();
    const { search, error, loading } = useSelector(
        ({ search, loading, user }) => ({
            search: search.search,
            error: search.error,
            loading: loading['search/READ_SEARCH'],
        }),
    );

    // let chartData = {
    //     labels: ['January', 'February', 'March',
    //         'April', 'May'],
    //     datasets: [
    //         {
    //             label: 'Rainfall',
    //             backgroundColor: 'rgba(75,192,192,1)',
    //             borderColor: 'rgba(0,0,0,1)',
    //             borderWidth: 2,
    //             data: [65, 59, 80, 81, 56]
    //         }
    //     ]
    // }
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        dispatch(readSearch(tag));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            //dispatch(unloadPost());
        };
    }, [dispatch, tag]);

    // useEffect(() => {
    //     let labels = [];
    //     let datas = [];
    //     console.log(search)
    //     for (key in search.uploads) {
    //         labels.push(key);
    //         datas.push(search.uploads[key]);
    //     }
    //     let chartData = {
    //         labels,
    //         datasets: [
    //             {
    //                 label: 'Rainfall',
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: 'rgba(0,0,0,1)',
    //                 borderWidth: 2,
    //                 data: datas
    //             }
    //         ]
    //     }
    //     setChartData(chartData);
    // }, [loading]);

    return (
        <GraphViewer searchResult={search}/>
        // <>
        // </>

//     <Bar
//     <div>
    //         data={chartData}
    //         options={{
    //             title: {
    //                 display: true,
    //                 text: 'Average Rainfall per month',
    //                 fontSize: 20
    //             },
    //             legend: {
    //                 display: true,
    //                 position: 'right'
    //             }
    //         }}
    //     />
    // </div>
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