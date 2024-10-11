//Animations//
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
  });
});


const hiddenElments = document.querySelectorAll('.hidden');
hiddenElments.forEach((el) => observer.observe(el));

// const observer2 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           entry.target.classList.add('in-view'); 
//       } else {
//           entry.target.classList.remove('in-view'); //  optional
//       }
//   });
// }, {
//   threshold: 0.4 // trigger animation at different scroll points
// });

// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => observer2.observe(box));



//Chatbox App New //

const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "พิมข้อความ.....";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "คุณต้องการลบข้อความหรือไม่"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}



// Chatbox Drag Old //

let color = document.getElementById('color')
let createBtn = document.getElementById('createBtn')
let list = document.getElementById('list')

// Creating Notes //
createBtn.onclick = () => {
    let newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute("id", "mydiv");
    newNote.innerHTML = `
    <span class="close">x</span>
    <textarea
    placeholder="Write Content..."
    rows="10" cols="30"></textarea>`;
    newNote.style.borderColor = color.value;
    list.appendChild(newNote)
}

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('close')){
        event.target.parentNode.remove();
    }
})

// Dragging //


let cursor = {
    x: null,
    y: null
}
let note = {
    dom: null,
    x: null,
    y: null
}


document.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('note')){
        cursor = {
            x: event.clientX,
            y: event.clientY
        } 
        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        } 
    }
})


document.addEventListener('mousemove', (event) => {
    if(note.dom == null) return;
    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }
    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }


    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top =  (note.y + distance.y) + 'px';
    console.log(note.dom.offsetLeft, note.dom.offsetTop);
    // note.dom.offsetLeft
    // note.dom.offsetTop
    note.dom.style.cursor = 'move';
})

document.addEventListener('mouseup', () => {
    if( note.dom == null) return;
    note.dom.style.cursor = 'auto';
    note.dom = null;  
})
