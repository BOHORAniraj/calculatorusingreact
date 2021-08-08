import React from 'react'

export const BtnContainer = ({handelonButtonClick}) => {

    const btns = ["AC","C","/","*",8,7,9,0,"-",4,5,6,"+",3,2,1,"=","OFF"];
    // const handelonClick = btnval => {
       
    // }
    return (
        <div>
            <section className="items">
                {
                    btns.map((btn,i) => {
                        return <button key={i} onClick={() => handelonButtonClick(btn)}>{btn}</button>
                    })
                }
    
</section>
        </div>
    )
}
