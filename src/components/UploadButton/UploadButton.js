import React from 'react'
import { connect } from 'react-redux'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

const dropStyles = {
    width: "100px",
    height: "100px",
    "background-color": "#FFFFFF"
}



class UploadButton extends React.Component {
    innerEl = (
        <div className="card__imageContainerSmall">
            {this.props.currentImage ?
                <img className="card__image" src={this.props.currentImage} /> :
                <p className="card__description" style={{marginLeft:'10px'}} >Click to Upload or Drag File Here</p>}
        </div>
    )
    state = {
        url: this.props.imageUrl
    }

    handleFinishedUpload = info => {
        console.log("info from uploadButton", info)
        // console.log('File uploaded with filename', info.filename)
        // console.log('Access it on s3 at', info.fileUrl)
        // this.props.dispatch({type:'POST_IMAGE', payload: info.fileUrl})
        this.props.handleChangeImage(info.fileUrl)

    }
    render() {
        const uploadOptions = {
            server: 'http://localhost:5000',
            // signingUrlQueryParams: {uploadType: 'avatar'},
        }

        const s3Url = 'https://siid.s3.amazonaws.com'

        return (
            <DropzoneS3Uploader
                // style={{previewImage: ''||this.props.currentImage}}
                children={this.innerEl}
                style={dropStyles}
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
