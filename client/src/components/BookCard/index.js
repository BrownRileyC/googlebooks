import React from 'react';

function BookCard(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <img src={props.thumbnail} alt='' />
                </div>
                <div className='col-8'>
                    <strong>
                        Title: {props.title}
                    </strong>
                    <br />
                    <strong>
                        Author(s): {props.authors.map(author => (" " + author))}
                    </strong>
                    <br />
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className='col-1'>
                    {props.state === 'saved' ? (
                        <button data-id={props.id} onClick={(e) => props.alterBook(e, props.id)}>Delete</button>
                    ) : (<button data-id={props.id} onClick={(e) => props.alterBook(e, props.id)}>Save</button>)}

                    <a href={props.view} target='_blank'><button>View</button></a>
                </div>
            </div>
        </div>
    )
};

export default BookCard;