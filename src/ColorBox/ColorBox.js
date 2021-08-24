import React from 'react';

import './ColorBox.css';
import PropTypes from "prop-types";

class ColorBox extends React.Component {

    static propsTypes = {
        colors: PropTypes.arrayOf(PropTypes.string),
        color: PropTypes.string
    }

    constructor(props) {
        super(props);

        const timeInterval = Math.floor(Math.random() * 5000) + 2500;

        setInterval( () => {
            const afterTime = Math.floor(Math.random() * 800) + 500;
            setTimeout( () => {
                const colorIndex = Math.floor(Math.random() * props.colors.length);
                this.setState({
                    ...props,
                    color: props.colors[colorIndex]
                })
            }, afterTime)
        }, timeInterval)
    }

    render() {
        let color = this.state ? this.state.color : "white";
        return(
            <p
                className='colorBox'
                style={{backgroundColor: color}}
            ></p>
        );
    }
}

// const ColorBox = props => {
//     const colorIndex = Math.floor(Math.random() * props.colors.length);
//     props.setState( {
//         ...props,
//         color: props.colors[colorIndex]
//     })
//
//     const timeInterval = Math.floor(Math.random() * 1000);
//     setInterval( () => {
//         const afterTime = Math.floor(Math.random() * 500);
//         setTimeout( () => {
//             const colorIndex = Math.floor(Math.random() * props.colors.length);
//             this.setState({
//                 ...props,
//                 color: props.colors[colorIndex]
//             })
//         }, afterTime)
//     }, timeInterval)
//     return(
//       <p
//           className='colorBox'
//           style={{backgroundColor: this.props.color}}
//       ></p>
//     );
// }

export default ColorBox;
