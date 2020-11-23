import React from 'react';
import './post-add-form.css';
import styled from 'styled-components'



const BottomPanel = styled.div `
display: flex;
margin-top: 20px;
`

const NewPostLabel = styled(BottomPanel)`
width: auto;
flex-grow: 1;
margin-right: 3px;
`

const PostAddForm = ({onAdd}) => {
    return (
      
        <NewPostLabel>
            <input
                type='text'
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"/>
                
                <button type='submit'
                        className="btn btn-outline-secondary"
                        onClick={()=> onAdd('Hello')}>
                    Добавить
                </button>
        </NewPostLabel>

       
)
}

export default PostAddForm