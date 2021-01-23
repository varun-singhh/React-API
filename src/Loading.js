import React from 'react'

function Loading() {
    return (
        <div style={{display:"flex",justifyContent:"center",position:"relative",top:"100px"}}>
            {/* i have just used loader gif, but one can use self made loaders also */}
            <img src="https://cdn.dribbble.com/users/14275/screenshots/1882226/amc_loading.gif" height="250" />
        </div>
    )
}

export default Loading
