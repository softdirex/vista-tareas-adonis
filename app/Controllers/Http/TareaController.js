'use strict'

const Tarea = use('App/Models/Tarea')
const data = use('App/Utils/Data')
const { validate } = use('Validator')

class TareaController {
    async index ({view}){
        var obj = []
        const result = await data.execApiGet('/tareas',obj);
        return view.render('tareas.index', {tareas: result.body.data})
    }

    async store ({request,response,session}){
        const validation = await validate(request.all(), {
            title: 'required|min:3|max:255'
        })

        if(validation.fails()){
            session.withErrors(validation.messages())
            .flashAll()

            return response.redirect('back')
        }

        var body = {
            title: request.input('title'),
            status: "1"
        }

        const result = await data.execApiPost('/tareas',body);

        if(result.body.status == 'OK'){
            session.flash({ notification: 'Tarea añadida' })
        }else{
            session.flash({ notification: 'Tarea no pudo ser añadida' })
        }

        return response.redirect('back')
    }

    async destroy({params, session, response}){
        var obj=[]
        const result = await data.execApiDelete('/tareas/'+params.id,obj);
        if(result.body.status == 'OK'){
            session.flash({ notification: 'Tarea borrada' })
        }else{
            session.flash({ notification: 'No se pudo borrar' })
        }
        console.log(result)

        return response.redirect('back')
    }

    async update({params, session, request, response}){
        const validation = await validate(request.all(), {
            title: 'required|min:3|max:255'
        })

        if(validation.fails()){
            session.withErrors(validation.messages())
            .flashAll()

            return response.redirect('back')
        }

        var obj = {
            title: request.input('title'),
            status: "1"
        }

        const result = await data.execApiPut('/tareas/'+params.id,obj);
        if(result.body.status == 'OK'){
            session.flash({ notification: 'Tarea modificada' })
        }else{
            session.flash({ notification: 'No se pudo modificar' })
        }
        console.log(result)

        return response.redirect('back')
    }
}

module.exports = TareaController
