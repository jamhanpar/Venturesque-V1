import React from 'react';

export function SearchResult(props) {    
    // if (!props.business) return (<div/>)

    return (
        <div>
            {/* <img src={props.business.image_url} alt="business"/> */}
            <img src="https://via.placeholder.com/300x300?text=Business+Image" alt="business"/>
            <div>
                <h2>Business Name</h2>
                <div>Business Rating</div>
                <p>$$ <span>Burgers</span> <span>Fast Food</span></p>
            </div>
            <div>Business Contact & Address</div>
            {/* <div>{props.business.name}</div> */}
        </div>
    )
}