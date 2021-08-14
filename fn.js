const fs =require('fs')
const addNote=(id,name,grade)=>{
    const notes= loadnotes()
    const duplicatedid=notes.filter(note=>{
       return note.id===id
    })
    if(duplicatedid.length==0){
        notes.push(
            {id,
              name,
              grade  
        })
    }else{
        console.log('duplicated id')
    }
    savenotes(notes)
}
const loadnotes=()=>{
   
    try{
        const buffer=fs.readFileSync("load.json").toString()
       return JSON.parse(buffer)

    }
    catch(e){
       return []
    }
}
const savenotes=(notes)=>{
    const save=JSON.stringify(notes)
    fs.writeFileSync("load.json",save)
}
const removeid= (id) =>{
    const notes =loadnotes()
    const notesToKeep=notes.filter((note)=>{
        return note.id !== id
    })
    console.log(notesToKeep)
    savenotes(notesToKeep)
    }
    const readNote = (id)=>{
        const notes=loadnotes()
        const note=notes.find((note) => {
            return note.id===id
        })
        if(note){
            console.log(note)
        }
        }    
const list=()=>{
    const notes =loadnotes()
    notes.forEach(note=>{
       console.log(note.id)
       console.log(note.name)
    })   
}    
    module.exports={
    addNote,
    removeid,
    readNote,
    list
}

