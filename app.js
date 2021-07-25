// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "person-1.jpeg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "person-2.jpeg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "person-3.jpeg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "person-4.jpeg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
  const person = reviews[currentItem];
  image.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
});
function showPerson(item) {
  const person = reviews[item]; 
  image.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}

nextBtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0;
  }
  showPerson(currentItem);

});

preBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem<0){
    currentItem = reviews.length-1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random()*reviews.length);
  showPerson(currentItem);
});