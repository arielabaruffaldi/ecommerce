import React, { useState, useEffect } from 'react';
import { socket } from './../../utils/socket';
import Input from "../Input/Input"
import Button from '../Button/Button';
import styles from "./Chat.module.scss";
import { FiX } from "react-icons/fi";
import { http } from "./../../utils/axios";

interface Message {
    email: string,
    message: string,
    date: string
}

interface EventInterface {
    target: {
        value: string,
        name: string
    },
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ChatProps {
    onClose: () => void
}

const Chat = ({ onClose }: ChatProps) => {
    const [form, setForm] = useState({
        email: "",
        message: ""
    })
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        //TODO: PASAR A REDUX EL STATE DE MENSAJES
        socket.on('messages', data => {
            console.log("Mensajes recibidos: ", data);
            setMessages(data)
        });
        getData()
    }, [])

    const getData = async () => {
        const { data } = await http.get('/messages/')
        setMessages(data)
        console.log("data msg", data)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        socket.emit('new-message', form);
    }

    return (
        <>
            <form className={styles.Chat} onSubmit={handleSubmit}>
                <FiX size={"1.5rem"} color={'var(--secondary-color)'} className={styles.closeModal} onClick={onClose}>x</FiX>
                <Input
                    customClass={styles.Input}
                    name="mail"
                    placeholder={"Email"}
                    onChange={(e: EventInterface) => setForm(prevState => ({ ...prevState, email: e.target.value }))}
                />
                <div className={styles.MessagesContainer}>
                    {messages.length > 0 && messages.map((msg, index) => {
                        return (
                            <div key={index}>
                                <p><span className={styles['Chat--email']}>{msg.email}</span> <span className={styles['Chat--date']}> ({msg.date}) </span> <span className={styles['Chat--message']}>{msg.message}</span></p>
                            </div>
                        )
                    })}
                </div>
                <Input
                    customClass={styles.Input}
                    name="message"
                    placeholder={"Mensaje"}
                    onChange={(e: EventInterface) => setForm(prevState => ({ ...prevState, message: e.target.value }))} />
                <Button variation="secondary" type="submit" disabled={!form.email} size={"10rem"}>
                    Enviar
                </Button>
            </form>
        </>
    )
}

export default Chat;