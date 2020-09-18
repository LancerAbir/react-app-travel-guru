import React from 'react';

const Card = (props) => {

    const { name, img } = props.card

    return (
        <>
            <img src={img} alt="" />
            <h5>{name}</h5>
        </>
    );
};

export default Card;