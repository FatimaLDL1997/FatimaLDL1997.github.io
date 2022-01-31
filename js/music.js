
const menu = [
    {
        id: 1,
        title: 'No Sound',
        category: 'silent',
        desc: "The quieter you become, the more you are able to hear. ",
        author: "-Ram Dass",
        music: ` `,
    },
    {
        id: 2,
        title: 'Flowing River',
        category: 'Water',
        desc: "If the ocean can calm itself, so can we. We are both salt water mixed with air. ",
        author: "-Nayyirah Waheed",
        music: `./music/water.mp3`,
    },
    {
        id: 3,
        title: 'Howling Wind',
        category: 'Wind',
        desc: "I can't always change the direction of the wind, but I can adjust my sails to always reach my destination. ",
        author: "-Jimmy Dean",
        music: `./music/wind.mp3`,
    },
    {
      id: 4,
      title: 'Relaxing Rain',
      category: 'Rain',
      desc: "Life isn't about waiting for the storm to pass. It's about learning how to dance in the rain. ",
      author: " -Vivian Greene",
      music: `./music/rain.mp3`,
    },
    {
      id: 4,
      title: 'Bird Songs',
      category: 'Birds',
      desc: "I want to sing like the birds sing, not worrying about who hears or what they think. ",
      author: " -Rumi",
      music: `./music/chirp.mp3`,
    },
    
  ];
  //dynamic population of html section using an array and js 
  const middle = document.querySelector(".middle__content"); 
  const container = document.querySelector(".middle__buttons"); 
  //load items 
  window.addEventListener("DOMContentLoaded", function () {
    // displayMenuItems(menu);
    displayMenuButtons(); 
    });
  
  function displayMenuButtons(){
    const categories = menu.reduce(
      function(values, item){
        if(!values.includes(item.category)){
          values.push(item.category);
        }
        return values; 
      },
      []
    );
    const categoryBtns = categories
    .map(function(category){
    return `<button class="middle__filter-btn" type="button" 
    data-id=${category}>
    ${category}
    </button>`;
    })
    .join("");
    container.innerHTML = categoryBtns; 
    const filterBtns = container.querySelectorAll(".middle__filter-btn");
      
      
    //filter items     
    filterBtns.forEach(function(btn){
      
        
        btn.addEventListener('click', function(e) {
            console.log("clicked something"); 
            const category = e.currentTarget.dataset.id; 
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    console.log(menuItem); 
                    return menuItem;  
                }
            });
            if(category === 'All'){
              console.log("All clicked"); 
                displayMenuItems(menu); 
            }
            else {
                displayMenuItems(menuCategory); 
            }
        }); 

    }); 
  }
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
      // console.log(item);
  
      return `<div class="middle__txt">
                <h1>${item.title}</h1>
                <h3>${item.desc}</h3> 
                <h2>${item.author}</h2>
              </div>
        
              <embed src="${item.music}" loop="true" autoplay = " true" width="2" height="0">`;
       
    }) 
  
    displayMenu = displayMenu.join(" ");
    middle.innerHTML = displayMenu;
  }