const fn =require('./fn.js')
const yargs = require('yargs')
yargs.command({
    command:'add' ,
    describe:'read note',
    builder:{
     id:{
         describe:'thia is id',
         demandOption:true,
         type:'number'
     },
     name:{
         describe:'thia is name',
         demandOption:true,
         type:'string'
 
     },
     grade:{
        describe:'thia is grade',
        demandOption:true,
        type:'number'
    },
    comment:{
        describe:'thia is comment',
        type:'string'
    }
 }, 
    handler:(argv)=>{
        fn.addNote(argv.id,argv.name,argv.grade)
    }
 })
 yargs.command({

    command:'delet' ,
    describe:'delet note',
    builder:{
     id:{
         describe:'thia is id',
         demandOption:true,
         type:'number'
     }
 }, 
    handler:(argv)=>{
        fn.removeid(argv.id)
    }
 })

 yargs.command({
    command:'read' ,
    describe:'write note',
    builder:{
     id:{
         describe:'this is id',
         demandOption:true,
         type:'number'
     }
 }, 
    handler:(argv)=>{
        fn.readNote(argv.id)
    }

 })
 
 yargs.command({
    command:'list' ,
    describe:'list note',
    handler:(argv)=>{
       fn.list()
    }
 })
 console.log(yargs.argv)