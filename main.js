// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);




//Slide left//

const animatedLeft = document.querySelectorAll('.animated-left');

animatedLeft.forEach((element)=> {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: '50% 50%',
      markers: false,
      toggleActions: 'play none none reverse'
    }
  });
  tl.from(element,{
    x: -400
  });
});

//Slide Right//

const animatedRight = document.querySelectorAll('.animated-right');

animatedRight.forEach((element)=> {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: '50% 50%',
      markers: false,
      toggleActions: 'play none none reverse'
    }
  });
  tl.from(element,{
    x: 400
  });
});

//Fade in bottom//
const animatedElements = document.querySelectorAll('.animated-element');

animatedElements.forEach((element)=> {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.5,
  });
});

//Click Reveal//
//close content window//
var userBack = document.getElementsByClassName('item-back')[0];
var reveal = document.getElementById('item-details');

userBack.addEventListener('click', function() {
  reveal.classList.toggle('show');
});

//close all items window//

// var userReveal = document.getElementsByClassName('items-info');
// for(var i = 0; i < userSelection.length; i++) {
//   (function(index) {
//     userSelection[index].addEventListener("click", function() {
//       reveal.classList.toggle('show');
//      })
//   })(i);
// }


//show content window//
var userSelection = document.getElementsByClassName('item-card');

for(var i = 0; i < userSelection.length; i++) {
  (function(index) {
    userSelection[index].addEventListener("click", function() {
      reveal.classList.toggle('show');
     })
  })(i);
}

var Topic1 = document.getElementsByClassName('topic1');
var Topic1Reveal = document.getElementById('item1-info');

for(var i = 0; i <Topic1.length; i++) {
  (function(index) {
    Topic1[index].addEventListener("click", function() {
      Topic1Reveal.classList.toggle('show2');
     })
  })(i);
}

//   function viewContent(el) {
//   var viewItem = document.getElementById(el);
//   if (viewItem.style.display === "none") {
//     viewItem.style.display = "none";
//   }
//   if (viewItem.style.display === "block"){
//     viewItem.style.display = "none";
//   }
//   else {
//     viewItem.style.display = "block";
//   }
// }

//Parallax//
  // const bannerWrapper = document.querySelector('#banner-wrapper')
  // const bannerBG = document.querySelector('div[id*="banner-bg-"]')

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: bannerWrapper,
  //     start: 'top top',
  //     scrub: true
  //   }
  // })

  // bannerBG.forEach(bg => {
  //   const bgSpeed = bg.getAttribute('data-speed')

  //   tl.to(bg, {
  //     y: 60 * bgSpeed,
  //     duration: 2
  //   })
  // })
  
//Animations//
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//     } else {
//         entry.target.classList.remove('show');
//     }
//   });
// });


// const hiddenElments = document.querySelectorAll('.hidden');
// hiddenElments.forEach((el) => observer.observe(el));

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
