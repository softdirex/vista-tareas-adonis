'use strict'
const Database = use('Database')
const Env = use('Env')
const Helpers = use('Helpers')
const got = use('got')
const Logger = use('Logger')

module.exports = {
    execApiGet: async (method,obj)=>{
        var server = Env.get('API_SERVER', 'development')
        
        try{
            var result = await got(`${server}${method}`,
            {
                json:true,
                query:obj
            });

        }catch(e){
            var result ={
                body:{
                    data:[]
                }
            }
            Logger.debug(`metodo:${method},datos:${obj},mensaje:${e.message}`)
            return result;
        }
        return result;
    },

    execApiPost: async (method,obj)=>{
        
        var server = Env.get('API_SERVER', 'development')

        
        var result = await got.post(`${server}${method}`,
        {
            json:true,
            body:obj
        })
        return result;
    },

    execApiPut: async (method,obj)=>{
        var server = Env.get('API_SERVER', 'development')
        
        try{
            var result = await got.put(`${server}${method}`,
            {
                json:true,
                query:obj
            });

        }catch(e){
            var result ={
                body:{
                    data:[]
                }
            }
            Logger.debug(`metodo:${method},datos:${obj},mensaje:${e.message}`)
            return result;
        }
        return result;
    },

    execApiDelete: async (method,obj)=>{
        var server = Env.get('API_SERVER', 'development')
        
        try{
            var result = await got.delete(`${server}${method}`,
            {
                json:true,
                query:obj
            });

        }catch(e){
            var result ={
                body:{
                    data:[]
                }
            }
            Logger.debug(`metodo:${method},datos:${obj},mensaje:${e.message}`)
            return result;
        }
        return result;
    }

}
