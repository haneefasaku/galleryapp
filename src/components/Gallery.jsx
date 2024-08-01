import React, { useEffect, useState  } from 'react'
import './Gallery.css'

function Gallery() {

  const [images,setImages] = useState([]);

  useEffect(()=>{
    const fetchImage = ()=>{
      const data = [
        {
          id:1,
          url:'https://picsum.photos/id/1/300/200',
          title:'image 1'
        },
        {
          id:2,
          url:'https://picsum.photos/id/2/300/200',
          title:'image 2'
        },
        {
          id:3,
          url:'https://picsum.photos/id/3/300/200',
          title:'image 3'
        },
        {
          id:4,
          url:'https://picsum.photos/id/4/300/200',
          title:'image 4'
        },
        {
          id:5,
          url:'https://picsum.photos/id/5/300/200',
          title:'image 5'
        }
      ];
      setImages(data);
    };
    fetchImage();
  },[]);


  const handleDeleteImage=(id)=>{
    setImages(images.filter((image)=>image.id !== id));
  }


  return (
    <div>
        <h1>Image Gallery App</h1>
        {
          images.length > 0 ?(
            <div className="image-container">

            {
             images.map((image)=>(
               <div className="image-card">
                 <img src={image.url} alt="" key={image.id}/>
                 <div className="image-details">
                     <h3>{image.title}</h3>
                     <button onClick={()=>{handleDeleteImage(image.id)}}>Delete</button>
                 </div>
               </div>
             ))
           
            }   
               
           </div>
          ): <p className='no-image'>Image not found</p>
        }
      
    </div>
  )
}

export default Gallery