import moment from 'moment';
import { dbSqlite as knexSqlite } from "./../../knexfile";

interface Message {
    mail: string,
    message: string,
    date: string
}
export default class Messages {

    public async addMessage(message: Message): Promise<number[]> {
        message.date = moment().format('DD/MM/YYYY h:mm:ss a');
        const response = await knexSqlite("messages").insert(message)
        return response
    }
    public async getMessages(): Promise<Message[]> {
        try {
            const data = await knexSqlite.from("messages")
            return data
        } catch (e) {
            throw new Error('Error while loading the messages');
        }
    }
}