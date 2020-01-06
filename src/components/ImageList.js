import React from 'react';
import ImageCard from './ImageCard';
import '../styling/ImageDisplay.css'

const ImageList=(props)=>{
    // var image;
    // if(props.images.length>1){
    //      image= props.images;
    // }else{
    //      image=[];
    // }
    // console.log(props.images);
    // return (
    //     <div>
    //         <div>
    //             {props.images.map(im=>{
    //                     return <img src={im.urls.small}/>
    //                 })||[]}
    //         </div>
    //     </div>
    // );
    const image=props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    })
    return (<div className='image-display'>{image}</div>);
}

export default ImageList;