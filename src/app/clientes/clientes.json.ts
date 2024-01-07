import { cliente } from './cliente'; // Importando la clase cliente

export const CLIENTES: cliente[] = [ // Asegurándonos de que los datos coincidan con la estructura de la clase cliente
{id: 1, nombre: 'Cliente 1', apellido: 'Apellido 1', createAt: '2023-01-01', email: 'cliente1@email.com'},
{id: 2, nombre: 'Cliente 2', apellido: 'Apellido 2', createAt: '2023-01-02', email: 'cliente2@email.com'},
// ... más clientes
];