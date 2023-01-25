import React from 'react'

const Deletiontodo = (props) => {
    return (
        <>
            <div className='mytodo'>
                <ol>
                    <li type="none">
                        {props.text}
                    </li>
                </ol>
                <p onClick={() => {
                    props.onSelect(props.id);
                }}>
                    <i class="fa-solid fa-trash"></i>
                </p>
                <span onClick={() => {

                }}>
                    <i class="fa-solid fa-pen-to-square"></i>
                </span>
            </div>


        </>
    )
}
export default Deletiontodo