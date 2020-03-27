import React from 'react';
import { fish, bugs } from '../data';

export default function FishChecks(props) {
    const {month, loc} = props;
    const data = props.type === 'fish'? [...fish] : [...bugs];

    const displayTime = (time) => {
        if(time[0] === 0 && time[1] === 23) {
            return <span>All day</span>
        }

        let timeString = '';
        if (time[0] < 13) {
            if(time[0] === 0) {
                timeString = '12 a.m -';
            } else {
                timeString = `${time[0]} a.m -`;
            }
        } else if (time[0] >= 13) {
            timeString = `${time[0]-12} p.m -`;
        }

        if (time[1] < 13) {
            if(time[1] === 0) {
                timeString += ' 12 a.m';
            } else {
                timeString += ` ${time[1]} a.m`;
            }
        } else if (time[1] >= 13) {
            timeString += ` ${time[1] - 12} p.m`;
        }

        if(time.length > 2) {
            if (time[2] < 13) {
                if(time[2] === 0) {
                    timeString += ', 12 a.m -';
                } else {
                    timeString += `, ${time[2]} a.m -`;
                }
            } else if (time[2] >= 13) {
                timeString += `, ${time[2] - 12} p.m -`;
            }

            if (time[3] < 13) {
                if(time[3] === 0) {
                    timeString += ' 12 a.m';
                } else {
                    timeString += ` ${time[3]} a.m`;
                }
            } else if (time[3] >= 13) {
                timeString += ` ${time[3] - 12} p.m`;
            }
        }

        return <span>{timeString}</span>
    }

    return (
        <div className='listDiv'>
            <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td className='centerRow'>Location</td>
                    {props.type === 'fish'? <td className='centerRow'>Size</td> : null}
                    <td className='centerRow'>Value</td>
                    <td className='centerRow'>Time</td>
                </tr>
            </thead>
            
            <tbody>
                {data.map(item => {
                if(item.months[month] === 1 && loc[(item.location.toLowerCase())] === true) {
                    return (
                    <tr key={item.name} className={item.location.toLowerCase()}>
                        <td>{item.name}</td>
                        <td className='centerRow'>{item.location}</td>
                        {props.type === 'fish'? <td className='centerRow'>{item.size}</td> : null}
                        <td className='centerRow'>{item.value}</td>
                        <td className='centerRow'>{displayTime(item.time)}</td>
                    </tr>
                    )
                }
                return null;
                })}
            </tbody>
            </table>
        </div>
    )
}