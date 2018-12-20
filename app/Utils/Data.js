'use strict'
const Database = use('Database')
const Env = use('Env')
const Helpers = use('Helpers')
const got = use('got')
const Logger = use('Logger')

module.exports = {
    execApi: async (method,obj)=>{
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

    apiGet: async (method)=>{
        var server = Env.get('API_LOCAL', 'development')
       
        var result = await get(server+method,
        {
            json:true
        })
        return result;
    },

    execApiPost: async (hostname,method,obj)=>{
        
        var server = Env.get('API_SERVER', 'development')
        var alias = Env.get('HOSTALIAS', 'localhost')

        var cliente = hostname.split(".")[0]
        if(hostname==alias || hostname=='127.0.0.1'){
            cliente = "localhost";
        }
        obj.cliente = cliente;
        
        var result = await got.post(`${server}${method}`,
        {
            json:true,
            body:obj
        })
        ////console.log(obj)
        return result;
    }

}
