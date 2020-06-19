import {task} from './example.js';
import {cursos} from './cursos';
import user from  './mongo/models/user';

export const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      greet(root, {name}, cxt) {
        console.log('context:  '+ cxt[0]);
        return ` Hello ${name}`;
      },
      tasks:() =>{
        return task;
      },
      async Users (){
        const docs = await user.find();
        console.log(docs);
        return docs;
      },
      obtenerCliente (root, {name}) {
        return `Hello cliente return`;
      },
      obtenerCursos(){
        return `Hello cliente return`;
        return cursos[0];
      }
 
    },
    Mutation :{
      createTask(_, {input}){
        console.log(input);
        input._id= task.length;
        task.push(input);
        return input;
      },

      async createUser(_, {input}){
        const inputUser=new user(input);
        await inputUser.save();
        console.log(inputUser);
        return inputUser;
      }
    }
    
  };

       