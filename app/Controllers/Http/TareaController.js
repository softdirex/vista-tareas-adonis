'use strict'

const Tarea = use('App/Models/Tarea')
const data = use('App/Utils/Data')
const { validate } = use('Validator')

class TareaController {
    async index ({view}){
        const tareas = await data.execApi('/tareas',{idUser:auth.user.id, estado:0});
        return view.render('tareas.index', {tareas: tareas.toJSON()})
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

        const tarea = new Tarea()
        tarea.title = request.input('title')
        tarea.status = '1'

        await tarea.save()

        session.flash({ notification: 'Tarea Añadida' })

        return response.redirect('back')
    }

    async destroy({params, session, response}){
        const tarea = await Tarea.find(params.id)

        await tarea.delete()

        session.flash({ notification: 'Tarea borrada' })

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
        const tarea = await Tarea.find(params.id)

        if(tarea.title === request.input('title')){
            session.flash({ notification: 'No existen cambios' })
        }else{
            tarea.title = request.input('title')

            await tarea.save()

            session.flash({ notification: 'Tarea modificada' })
        }

        return response.redirect('back')
    }
}

module.exports = TareaController
