


const menu = [
  {
    id: 'history',
    title: "History",
    desc: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,

    imgg: './hero-bcg.jpeg'

  },
  {
    id: "vision",
    title: "Vision",
    desc: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,

    imgg: './item-16.jpeg'
  },
  {
    id: "goals",
    title: "Goals",
    desc: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
    imgg: './item-17.jpeg'
  },
  {
    id: 'News',
    title: "News",
    desc: 'Information Minister Attaullah Tarar later addressed the developments, saying an institution had prioritised self-accountability and kicked off an investigation in that vein.“We think this act of self-accountability is positive and that it is a step that needs to be lauded, moving towards accountability and discord in the country being stopped.Tarar said every institution should be self-accountable, adding that it was very good that the military had initiated the process.He said todays ISPR statement “proved that the three officers were arrested as a result of the investigation from Gen faiz Hameed',
    imgg: './item-18.jpeg'
  },
  {
    id: 'Review',
    title: "Review",
    desc: 'He said there was “glaring and irrefutable evidence” present on whose basis the arrests were conductedSindh Information Minister Sharjeel Memon similarly said the arrests were “welcomed the way important decisions are being taken for Pakistan’s security and the noose is tightening against all those people those who crossed every limit to malign institutions and did not care for the country’s security just for the greed for power and their positions in collusion with a political party and the PTI founder Member said the recent arrests proved that “PTI leadership.',
    imgg: './item-19.jpeg'
  },
];


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

const about = document.querySelector(".about");
const imgElement = document.getElementById("tab-img");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
   let btns =document.querySelectorAll('.tab-btn');
   btns.forEach(function (btn) {
    btn.classList.remove('active');
   })
e.target.classList.add('active');
let articles = document.querySelectorAll('.content');
articles.forEach(function (article) {
  article.classList.remove('active');
})
let element=document.getElementById(id);
element.classList.add('active');
    const menuItem = menu.find(item => item.id == id);
    
      imgElement.src = menuItem.imgg;

//     let menuItem;
// for (let item of menu) {
//   if (item.id === id) {
//     menuItem = item;
//     break;
//   }
// }
// imgElement.src =menuItem.imgg
    
  }
});

function displayMenuItems(menuItems) {
  let buttonsHtml = menuItems.map(function (item) {
    return `<button class="tab-btn" data-id="${item.id}">${item.title}</button>`;
  }).join("");

  let contentHtml = menuItems.map(function (item, index) {
    let activeClass = index === 0 ? "active" : "";
    return `<div class="content ${activeClass}" id="${item.id}">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>`;
  }).join("");

  about.innerHTML = buttonsHtml + contentHtml;

  document.querySelector(".tab-btn").classList.add("active");

  // imgElement.src = menuItems[0].img;
  
}


