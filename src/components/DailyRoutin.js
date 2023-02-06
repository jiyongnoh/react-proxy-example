import React from 'react'

const BookTable = ({routin}) => {

    if (routin.length === 0) return null;

    return(
        <div className="table-wrapper">
            <div className="table-box">
                <h2>My Routin</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Book</th>
                            <th>Category</th>
                            <th>Author</th>
                        </tr>
                        </thead>
                        <tbody>
                            {routin.map((book,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{book.todo}</td>
                                        <td>{book.category}</td>
                                        <td>{book.isComplete}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookTable;