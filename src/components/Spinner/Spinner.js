import React from 'react'
import {Backdrop, CircularProgress} from '@material-ui/core'

const Spinner = () => {

        return (
           <Backdrop >
               <CircularProgress color="inherit" />
           </Backdrop>
        )
    
}

export default Spinner