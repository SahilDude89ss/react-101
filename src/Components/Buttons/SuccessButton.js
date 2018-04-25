import React, {Component} from 'react';
const successStyle = {
    padding: "10px",
    margin: "0 10px",
    color: "#ccc",
    backgroundColor: "green"
};

export default ({label}) => <button className={`btn btn-success`} style={successStyle}>{label}</button>;