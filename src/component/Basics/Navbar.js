import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <div>
            <nav className="navbar">
                <div className='btn-group group'>
                    {
                        menuList.map((curElem) => {
                            return <div>
                                <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>
                            </div>
                        })
                    }
                </div>
            </nav>

        </div>
    )
}

export default Navbar
