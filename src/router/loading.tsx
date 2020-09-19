import React, { CSSProperties } from 'react';

function Loading(){
    return (
        <div style = {loadingStyle}>
            loading...
        </div>
    )
}
const loadingStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(0,0,0,.5)",
    position: "fixed",
    zIndex: 999,
    top: '50%',
    left: '50%',
    marginLeft:'-50px',
    marginTop: '-50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
}

export default Loading;