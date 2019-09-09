import Cliente from './Cliente';
import { Clientes } from './db';

const clientesDB = {};

export const resolvers = {
    Query: {
        getCliente : ({id}) => {
            return new Cliente(id, clientesDB[id]);
        }
    },
    Mutation: {
        crearCliente: ({input}) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            clientesDB[id] = input;
            return new Cliente(id, input);
        }
    }
};