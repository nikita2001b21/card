import React from 'react'
import Menu from './MenuAPI';
import "./Style.css";



const MenuCard = ({ menuData }) => {
  // console.log( menuData );

  return (
    <>
    <div className='row'>
      <section className=' main-card--container card-width'>
        
          {menuData.map((curElem) => {

            const { id, name, category, image, description } = curElem;
            return (
              <div className='col-lg-4 cards  d-inline-flex' >
              <div className=' mt-4  pl-5'>
                <div className='card '  >
                  <div className='card-body '>
                    <span className='card-number card-circle  subtle'> {id}</span><br />
                    <span className='card-author subtle'>{category}</span>

                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>
                      {description}
                    </span>
                    <div className='card-read'>Read</div>
                 
                  <img src={image} className="card-media text-center w-100"></img>
                  <span className='card-tag subtle '>Order Now</span>
                </div>
                </div>
              </div>
              </div>
            )
          })
          }
        
      </section>
      </div>
    </>
  )
}

export default MenuCard;
