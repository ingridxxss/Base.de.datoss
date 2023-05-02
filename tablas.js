const express = require('express');
const router = require('router')

router.get('/', (req,res)=>{
    res.render("clientes",{
        arrayClientes:[
            {id:'unicoSinIgualPa',
            nombre:'pepito',
            edad:'455', 
            localidad:'Argentina'
        }
            {id:'Unic',
        nombre:'franquito',
        edad:'59',
        localidad:'tuCasa'
        }
        ]
    })
})