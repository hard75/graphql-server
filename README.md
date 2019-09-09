## graphql-server
#Problemas:
Al ingresar:

```javascript
mutation {
  crearCliente(input: {
    nombre: "alfonso",
    apellido:"barrientos",
    empresa: "wizard",
    emails: [
      { email: "alfonso@correo.com" }
      { email: "correo@correo.com" }
    ]
    edad: 25
    tipo: BASICO
    pedidos: [
      {
        producto: "curso de graphQL"
        precio: 20
      }
      {
        producto: "computador"
        precio: 2000
      }
    ]
  }) {
    id
    nombre
    apellido
    emails {
      email
    }
    tipo
    pedidos {
      producto
      precio
    }
  }
```

Sale el siguiente error:

```javascript
{
  "errors": [
    {
      "message": "Cannot read property 'input' of undefined",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "crearCliente"
      ]
    }
  ],
  "data": {
    "crearCliente": null
  }
}
