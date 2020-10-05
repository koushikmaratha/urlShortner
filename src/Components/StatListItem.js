import React from 'react';

const StatListItem = (props) => {
    let { long_url, short_url, count, countries } = props.statData;
    return (
        <div>
            <li className="list-group-item">
                <p style={{fontWeight:'bold'}}>{long_url}</p>
                <p>{`${window.location.origin.toString()}/${short_url}`}</p>
                <span>
                    <p>Total Clicks: {count}</p>
                    <p>Top Counties: {countries}</p>
                </span>
            </li>
        </div>
    );
};

export default React.memo(StatListItem);