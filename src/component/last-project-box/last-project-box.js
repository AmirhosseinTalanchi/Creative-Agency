import React from 'react'

export function LastProjectBox1({title,caption,img,color,shadowcolor}) {
  return (
        <div className='last-pro-box' style={{backgroundColor: color}}>
            <div className='last-pro-box__text'>
                <h4 className='h3 last-pro-box__title'>{title}</h4>
                <h5 className='h5 last-pro-box__caption'>{caption}</h5>
            </div>
            <div className='last-pro-box__img'>
                <div className='last-pro-box__img-wrapper'style={{boxShadow:`-20px -20px 100px 0px ${shadowcolor}`}}>
                    <img src={img} className='last-pro-box-image'/>
                </div>
            </div>
        </div>
  )
}

export function LastProjectBox2({title,caption,color,img1,img2}) {
    return (
        <div className='last-pro-box' style={{backgroundColor: color}}>
            <div className='last-pro-box__text'>
                <h4 className='h3 last-pro-box__title'>{title}</h4>
                <h5 className='h5 last-pro-box__caption'>{caption}</h5>
            </div>
            <div className='last-pro-box__img-s'>
                <img src={img1}  className='last-pro-box-image-s'/>
                <img src={img2}  className='last-pro-box-image-s'/>
            </div>
        </div>
    )
  }

export default LastProjectBox1

