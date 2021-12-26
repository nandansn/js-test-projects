// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const imgElement = document.querySelector('.img-container img')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

const authorEl = document.getElementById('author')
const jobEl = document.getElementById('job')
const infoEl = document.getElementById('info')

let index = 0;
let max = reviews.length;
let min = 0;

imgElement.setAttribute('src',reviews[0].img)
authorEl.innerHTML = reviews[0].name;
jobEl.innerHTML = reviews[0].job;
infoEl.innerHTML = reviews[0].text;

nextBtn.addEventListener('click', function () {
  ++index;
  if (index < max) {
    imgElement.setAttribute('src',reviews[index].img)
    authorEl.innerHTML = reviews[index].name;
    jobEl.innerHTML = reviews[index].job;
    infoEl.innerHTML = reviews[index].text;
  } else {
    index = max - 1;
  }
})

prevBtn.addEventListener('click', function () {
  --index;
  if (index >= 0) {
    imgElement.setAttribute('src',reviews[index].img)
    authorEl.innerHTML = reviews[index].name;
    jobEl.innerHTML = reviews[index].job;
    infoEl.innerHTML = reviews[index].text;
  } else {
    index = 0;
  }
})

randomBtn.addEventListener('click', function () {
  let i = Math.floor(Math.random() * 4);
  imgElement.setAttribute('src',reviews[i].img)
    authorEl.innerHTML = reviews[i].name;
    jobEl.innerHTML = reviews[i].job;
    infoEl.innerHTML = reviews[i].text;
})