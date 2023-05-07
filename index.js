var input = document.querySelector(".textField");
input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    addBtn()
  }
});
const addBtn = ()=>{
    let text = document.querySelector('.textField').value
    let totalNotes = localStorage.getItem("record")
    
    
    if(totalNotes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(totalNotes)
    }
    
    notesObj.push(text);
    localStorage.setItem("record", JSON.stringify(notesObj));
    text = document.querySelector('.textField').value = ""
    showNotes();
}

const showNotes = ()=>{
    let notes = localStorage.getItem("record");
    
    if(notes == null){
        notesObj =[]
    }else{
        notesObj = JSON.parse(notes)
    }

    let html =""
    notesObj.forEach((element , index) => {
        html += `
        <p>${element}</p>
        <button id=${index} onclick="deleteNote(${index})" class="delete"><i class="ri-delete-bin-7-line"></i></button>
    `
    });

    let notesElem = document.querySelector(".record")
    if(notesObj.length != 0){ 
        notesElem.innerHTML = html;
    }else{
        document.querySelector('para').innerHTML="Nothing!!! to do, Have a cup of coffee"
    }
    showNotes()
}

const deleteNote = (index) => {
    
    let notes = localStorage.getItem("record");
    
    if(notes == null){
        notesObj =[]
    }else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem("record", JSON.stringify(notesObj));
    showNotes();
}

showNotes();