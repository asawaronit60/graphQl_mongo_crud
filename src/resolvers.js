import { Cat } from "./models/cat"

 export const resolvers = {
    Query :{
        hello:()=>{
            return ' world'
        },
        getAllCat: async()=>{
                const data = await Cat.find();
                return data;
        }
    },
    Mutation :{
        createCat : async(parent,{name},ctx,info)=>{
                const kitty = new Cat({name})
                await  kitty.save()
                return kitty
        }
    }
}