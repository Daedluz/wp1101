import { useState } from 'react';
import { Card, Input, Button } from 'antd';
import styled from 'styled-components';
import { CREATE_CHATBOX_MUTATION, CREATE_MESSAGE_MUTATION } from '../graphql';
import { useMutation } from '@apollo/client';

const Modal = styled(Card)`
    position: absolute;
    display: flex;
    max-width: 300px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const StyledButton = styled(Button)
`
    margin: 5px;
`


export default function ChatModal({ me, visible, onCancel, onCreate })
{
    const [input, setInput] = useState("");
    const [startChat] = useMutation(CREATE_CHATBOX_MUTATION);


    return (
        <>
        {
            visible?
                <Modal title={"Who do you wanna chat with?\n"}>
                    <Input onChange={(e) => setInput(e.target.value)}/>
                    <br/>
                    <StyledButton onClick={() => onCancel()}>cancel</StyledButton>
                    <StyledButton type="primary" onClick={() => onCreate(input)}>create</StyledButton>
                </Modal>
            :
                <div></div>
                
        }
        </>
        
    )
}