
import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from './resolvers';


const typeDefs = `
type Query {
  hello: String
  greet(name: String): String,
  tasks:[Task], 
  obtenerCliente(id:ID) : Cliente,
  obtenerCursos:Curso,
  Users:[User]
}

type Curso{
  titulo: String
  tecnologia:String
}
type Task{
  _id: ID,
  title: String!,
  description: String!,
  number: Int
} 

type Cliente{
  id:ID
  nombre:String
  apellido: String
  empresa: String
  email:String
  edad:Int
}

type User{
  _id:ID
  firstName:String
  lastName:String
  age: Int
}

type Mutation{
  createTask (input : TaskInput): Task
  createUser(input : UserInput): User 
}

input TaskInput {
  title: String!,
  description: String!,
  number: Int
}

input UserInput{
  firstName: String!
  lastName: String!
  age:Int!
}
`;

export  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });