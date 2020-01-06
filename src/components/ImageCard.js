import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef= React.createRef();
        this.state={span: 0}
    }
    componentDidMount(){
        console.dir(this.imageRef)
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan=(e)=>{
        const height= e.target.clientHeight;
        const span= Math.ceil(height/10+1);
        console.log(span);
        this.setState({span});
    }
    render(){
        const {urls, description}= this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;