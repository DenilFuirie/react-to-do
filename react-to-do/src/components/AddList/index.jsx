import React, { useState } from 'react'
import List from "../List/List";
import Badge from '../Badge/Badge'

import './AddButtonList.scss'


const AddList = ({ colors }) => {
    const [visiblePopup , setVisiblePopup ] = useState(true)


    return (
        <>
            <List
                onClick={() => setVisiblePopup(!visiblePopup)}
                items={[
                    {
                        className: 'list__add-button',
                        icon: (<svg
                                width="12"
                                height="12"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <path
                                    d="M8 1V15"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 8H15"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                        ),
                        name: 'Добавить список'
                    }
                ]}
            />
            {visiblePopup &&
            <div className="add-list-popup">
                <input className='field' type='text' placeholder='Название списка'/>
                <div className='add-list__popup-colors'>
                    <ul>
                        <li>
                            <Badge color='green' />
                        </li>
                        <li>
                            <Badge color='blue' />
                        </li>
                    </ul>
                </div>
                <button className='button'>Добавить</button>
            </div>}
        </>
    )
}

export default AddList;
