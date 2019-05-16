import React from 'react';

export default class Header extends React.Component {
    
    render () {
        const { title } = this.props;
        return (
            <div>{title}</div>
        );
    }
}