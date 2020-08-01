import React from 'react';
import { Bar } from 'react-chartjs-2';

const GraphViewer = ({ searchResult }) => {

    // 로딩중이거나, 아직 포스트 데이터가 없을 시
    if (!searchResult) {
        return null;
    }
    const { uploads, date, tag } = searchResult;

    let labels = [];
    let datas = [];
    let title = tag;
    console.log(typeof tag)
    for (let key in searchResult.uploads) {
        labels.push(key);
        datas.push(searchResult.uploads[key]);
    }
    let data = {
        labels,
        datasets: [
            {
                label: 'post count',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: datas
            }
        ]
    }

    // console.log(searchResult.date);


    return (
        // <div>{date}</div>
        <div>
            <Bar
                data={data}
                options={{
                    title: {
                        display: true,
                        text : tag,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontSize : 14,
                            }
                        }]
                    }
                }}
            />
        </div>
    );
};

export default GraphViewer;
