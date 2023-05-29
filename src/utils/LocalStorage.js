const TICKET_TYPE = "TICKET_TYPE"

export class LocalStorage {

    static setTicketTypes(data) {
        localStorage.setItem(TICKET_TYPE, JSON.stringify(data))
    }

    static getTicketTypes() {
        const getTicketTypes = JSON.parse(localStorage.getItem(TICKET_TYPE));
        return getTicketTypes;
        // const p = JSON.parse(h);
    }


    static removeTicketTypes() {
        localStorage.removeItem(TICKET_TYPE)
    }

}