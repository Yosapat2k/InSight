// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1500); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


//Click to Scroll//
gsap.registerPlugin(ScrollToPlugin)
console.clear();
document.querySelector("#scene1-button").addEventListener("click", function() {
  gsap.to(window, { duration: 0.75, scrollTo: ".scene1" });
});
console.clear();
document.querySelector("#scene2-button").addEventListener("click", function() {
  gsap.to(window, { duration: 0.75, scrollTo: ".suggestions-body" });
});


//Slide left//

const animatedLeft = document.querySelectorAll('.animated-left');

animatedLeft.forEach((element)=> {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: '50% 60%',
      markers: false,
      // toggleActions: 'play none none reverse'
      scrub: true
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
      end: '50% 60%',
      markers: false,
      // toggleActions: 'play none none reverse'
      scrub: true
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
      start: '-150rem 80%',
      end: '-200rem 60%',
      // toggleActions: 'play none none reverse',
      markers: false,
      scrub: true
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

var Topic2 = document.getElementsByClassName('topic2');
var Topic2Reveal = document.getElementById('item2-info');

for(var i = 0; i <Topic1.length; i++) {
  (function(index) {
    Topic2[index].addEventListener("click", function() {
      Topic2Reveal.classList.toggle('show2');
     })
  })(i);
}

var Topic3 = document.getElementsByClassName('topic3');
var Topic3Reveal = document.getElementById('item3-info');

for(var i = 0; i <Topic1.length; i++) {
  (function(index) {
    Topic3[index].addEventListener("click", function() {
      Topic3Reveal.classList.toggle('show2');
     })
  })(i);
}

var Topic4 = document.getElementsByClassName('topic4');
var Topic4Reveal = document.getElementById('item4-info');

for(var i = 0; i <Topic1.length; i++) {
  (function(index) {
    Topic4[index].addEventListener("click", function() {
      Topic4Reveal.classList.toggle('show2');
     })
  })(i);
}

var Topic5 = document.getElementsByClassName('topic5');
var Topic5Reveal = document.getElementById('item5-info');

for(var i = 0; i <Topic1.length; i++) {
  (function(index) {
    Topic5[index].addEventListener("click", function() {
      Topic5Reveal.classList.toggle('show2');
     })
  })(i);
}

//Dragging//
gsap.registerPlugin(Draggable);

Draggable.create(".color-item", {
  bounds: ".container"
});

var CVDsim = document.getElementById('scene3-button');
var CVDoff = document.getElementById('CVDon');
var CVDoff2 = document.getElementById('CVDgame');

CVDsim.addEventListener('click', function() {
  CVDoff.classList.toggle('CVDfilter');
  CVDoff2.classList.toggle('CVDfilter');
});

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
