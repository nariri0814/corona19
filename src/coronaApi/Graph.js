import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2'; 
import './Graph.css'

const Graph = () => {
    const [ confirmed, setConfirmed ] = useState({});
    const [ quaranted, setQuaranted ] = useState({});
    const [ lastData, setLastData ] = useState([]);

    useEffect(()=> {

        const axiosData = async () => {
            const res = await axios.get ("https://api.covid19api.com/total/dayone/country/kr")
            krData(res.data)
            // .then(res => {
            //     setConfirmed(res.data.Confirmed)
            //     console.log(res.data.Active)
            //     setDeaths(res.data.Deaths)
            // }).catch(error => console.log(error))
        }
        const krData = (items) => {
            const arr = items.reduce((acc,cur)=> {
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const active = cur.Active;
                const confirmed = cur.Confirmed;
                const deaths = cur.Deaths;
                const recovered = cur.Recovered;

                const matchItem = acc.find(i => i.year === year && i.month === month)
                if (!matchItem) {
                    acc.push({year, month, date, active, confirmed, deaths})
                }
                if(matchItem && matchItem.date < date) {
                    matchItem.year = year;
                    matchItem.month = month;
                    matchItem.date = date;
                    matchItem.active = active;
                    matchItem.confirmed = confirmed;
                    matchItem.deaths = deaths;
                    matchItem.recovered = recovered;
                }

                // console.log(cur, year,month,date);
                // console.log(Active,Confirmed,Deaths);
                return acc;
            }, [])
            const labels = arr.map(a => `${a.month+1}월`);
            setConfirmed({
                labels,
                datasets: [{
                    label: '국내 누적 확진자',
                    backgroundColor: 'salmon',
                    fill: true,
                    data: arr.map(a => a.confirmed)
                }]
            });
            setQuaranted({
                labels,
                datasets: [{
                    label: '월별 격리자 현황',
                    borderColor: '#75b67a',
                    fill: false,
                    data: arr.map(a => a.active)
                }]
            });
            const last = arr[arr.length - 1]
            console.log(last)
            setLastData([last.confirmed, last.recovered, last.deaths])

        }
        axiosData();
    }, []);

    return (
        <div>
            <h2>국내 코로나 현황</h2>
            <div className="graph_wrap">
                <div className="korea_corona">
                    <div className="korea_box"><p>누적확진자</p>{lastData[0]}</div>
                    <div className="korea_box"><p>격리해제</p>{lastData[1]}</div>
                    <div className="korea_box"><p>사망자</p>{lastData[2]}</div>
                </div>
                <div className="graph_box">
                    <Bar data={confirmed} options={
                        { title: { display: true, text: '누적 확진자 추이', fontSize: 25} },
                        { legend: { display: true, position: 'bottom'} }
                    }/>
                </div>
                <div className="graph_box">
                    <Line data={quaranted} options={
                        { title: { display: true, text: '월별 격리자 현황', fontSize: 25} },
                        { legend: { display: true, position: 'bottom'} }
                    }/>
                </div>
            </div>
        </div>
    )
}

export default Graph;