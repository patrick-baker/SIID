import React from 'react'
import { connect } from 'react-redux'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'


class UploadButton extends React.Component {

    handleFinishedUpload = info => {
        console.log("info from uploadButton", info)
        // console.log('File uploaded with filename', info.filename)
        // console.log('Access it on s3 at', info.fileUrl)
        this.props.dispatch({type:'POST_IMAGE', payload: info.fileUrl})
      }
    render() {
        const uploadOptions = {
            server: 'http://localhost:5000',
            // signingUrlQueryParams: {uploadType: 'avatar'},
          }

          const s3Url = 'https://siid.s3.amazonaws.com'
      
        return (
            <DropzoneS3Uploader
            
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
        )
        }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(UploadButton);
