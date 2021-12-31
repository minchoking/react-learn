import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber}) => {
    return (
    <div>
        나의 이름은 {name} 이야 <br />
        children 값은 {children}입니다.
        <br/>
        내가 좋아하는 숫자는 {favoriteNumber}이다.
    </div>
    );
};

MyComponent.defaultProps = {
    name:'기본이름'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;