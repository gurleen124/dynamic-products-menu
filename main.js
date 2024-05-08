const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        desc: `If all the sweetness in this home were a dish, it would be a tall stack of pancakes with golden syrup and nature's berries cascading from the top.`,
    },
    {
        id: 2,
        title: "dinner double",
        category: "dinner",
        price: 13.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        desc: `Another reason for milkshakes' popularity is
        because they are creamy and smooth. They contain a lot of ice cream which makes them very
        icy and refreshing.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        desc: `That, combined with the yolk's creaminess,
        elevates the whole flavor profile of the burger. One of the largest hamburgers on record
        weighed 3,591 pounds.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        desc: `You can definitely up the Oreo factor and start
        with cookies-and-cream ice cream if you want, and while you can use any kind of milk, the richer
        the milk, the tastier the milkshake.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        desc: `Combine ground beef, onion, bacon,
        Worcestershire sauce, breadcrumbs, egg, salt, and pepper. Mix with hands until blended.
        Shape the ground beef mixture into 6 equal size burgers.`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

let sectionCenter = document.querySelector(".menu-items");
let btnContainer = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="grid gap-x-5 grid-cols-5">
        <img src=${item.img} alt=${item.title}
            class="col-span-2 h-40 object-cover w-60 border-4 rounded-md border-yellow-600" />
        <div class="col-span-3">
            <div class="flex justify-between font-semibold text-lg tracking-widest">
                <h2 class="capitalize">${item.title}</h2>
                <h2 class="text-yellow-700">$${item.price}</h2>
            </div>
            <hr class="border-dotted border-black my-3">
            <p class="text-justify font-medium text-gray-600">${item.desc}</p>
        </div>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['all']
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="hover:bg-yellow-700 capitalize hover:text-white" data-tab="${category}">${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    let btns = document.querySelectorAll('[data-tab]');
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            let category = this.dataset.tab;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            }else{
                displayMenuItems(menuCategory);
            }
        })
    })
}