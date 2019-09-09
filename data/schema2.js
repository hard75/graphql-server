import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Cliente {
    id: ID
    nombre: String
    apellido: String 
    empresa: String
    emails: [Email]
    edad: Int
    tipo: TipoCliente
    pedidos: [Pedido]
}

type Email {
    email: String
}

type Pedido {
    producto: String
    precio: Int
}

""" Asigna la categoría del cliente """
enum TipoCliente {
    BASICO
    PREMIUM
}

type Query {
    getCliente (id: ID): Cliente
}

input PedidosInput {
    producto: String
    precio: Int
}

input EmailInput {
    email: String 
}

""" Campo para clientes nuevos """
input ClienteInput {
    id: ID
    nombre: String!
    apellido: String!
    empresa: String!
    emails: [EmailInput]
    edad: Int!
    tipo: TipoCliente
    pedidos: [PedidosInput]
}

""" Mutation para crear nuevos clientes"""
type Mutation {
    #nombre del resolver, input con los datos
    crearCliente(input: ClienteInput) : Cliente
}
`);

export default schema;