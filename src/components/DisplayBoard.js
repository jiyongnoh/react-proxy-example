import React from 'react'

const DisplayBoard = ({numberOfBooks, getAllBook, getAllBook2}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                    {numberOfBooks}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllBook()}>Get all Books</button>
                    <button onClick={() => getAllBook2()}>Get all Books2</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayBoard;