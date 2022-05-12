
const menu = [
    {
        id: 1,
        title: "Bluetooth RC Car ",
        category: "Embedded",
        desc: `
        <h3>
            RC Car Inspired by DIY RC Cars online, I created my own from scratch using Arduino, 2 back gear motors, Adafruit Motor shield and a simplified steering mechanism. 
        </h3>
        <h3>
            The first prototype of this project was made from cardboard. Later, I got to use a laser cutter and a 3D printer to create a nicer and stronger wheel attachment, chassis, and steering mechanism.
        </h3>
        <h3>
            The car can be controlled using any smart phone once the 'car controller' 
            app, which I created using MIT App Inventor 2, is downloaded. 
        </h3>
        <h3>
            To find out more, click on <span>'More'</span> . 
        </h3>`,
        more: `<a href="https://docs.google.com/presentation/d/1o_kN13XVdnWkEdLOEnaNw110-DKlmgUn/edit#slide=id.p1" target="_blank">
        <button class="middle2__button">More</button>
        </a>`,
        vid: `https://www.youtube.com/embed/_VZ0PIWQRv4`,
    },
    {
        id: 2,
        title: "Autonomous Retrieval Robot",
        category: "Embedded",
        desc: `                    
        <h3>
            In the last year of my Mechatronics Engineering program, I got to build and program an amazing robotic project that combines Arduino and Python programming together.
        </h3>
        <h3>
            The robot's goal is to autonomously find & pick 2 small dark green and 2 big light green Legos and place them at different locations based on their sizes/colours. Then return home. 
        </h3>                    
        <h3>
            The robot was able to complete its tasks within the time limit given and return exactly where it started out.
        </h3>
        <h3>
            To know more about the implementation and other details, click on <span>'More'</span>. 
        </h3>`,
        more: `<a href="https://docs.google.com/presentation/d/1PUa8U0a-f6iZ2F3Uqu64av3yNkHGnZJ6SWFun64nca0/edit#slide=id.p" target="_blank">
        <button class="middle2__button">More</button>
        </a>`,
        vid: `https://www.youtube.com/embed/b1aJYZsqKdw`,
    },
    {
        id: 3,
        title: "Factory I/O Simulations",
        category: "Manufacturing",
        desc: `                    
        <h3>Factory I/O is a software that provides more than 20 scenes inspired by real world control tasks in factories and warehouses. It also provides the user with flexibility to create their own control tasks. These control systems in Factory I/O can be controlled using many different drivers including but not limited to all PLC brands and common automation technologies in the market. 
        </h3>
        <h3>
        For my Factory I/O projects, I used WinSPS-S7, which is a programming and simulation software that can be connected to Factory I/O for simulation, and can allow the use of LAD, STL and FBD programming languages. I also used block coding in the Control I/O driver to program some of other scenes. 
        </h3>  
        <h3>
            To know more about the Box Invertor project, you can click on <span>'More'</span>.                    
        </h3> `,
        more: `<a href="https://docs.google.com/presentation/d/1sFrfJt7mQPm7WV5CGWkuU-jeux3HAkwoBm6wZWR0sUg/edit#slide=id.g104b29813b7_1_634" target="_blank">
        <button class="middle2__button">More</button>
        </a>`,
        vid: `https://www.youtube.com/embed/GX4YVvpWhGs`,
    },
    {
        id: 4,
        title: "Python Security Camera",
        category: "Security",
        desc: `                    
        <h3>
            I coded a Python Security Camera app which uses scikit-image, a collection of algorithms and a part of the image processing in Python, Scikit-image can be used for computing the mean structural similarity index between current and previous image frames which is how motion can be detected in a video. 
        </h3>
        <h3>
            The application gives the user time to leave the space so that the detection doesn’t start right away by setting up a timer. Once the timer is done counting down, comparison between image frames will start and, thus, any motion detection will be sent over text to the user immediately. Also, if any motion is detected, a video recording of that instance will be stored in the security camera file under ‘output.avi’.  
        </h3>`,
        more: ``,
        vid: `https://www.youtube.com/embed/P8fikhLsUjo`,
    },
    {
        id: 5,
        title: "3D Cadded Models",
        category: "Modelling",
        desc: `                    
        <h3>
            I have created many 3D models during my studies and some of the best are the ones shown in the videos. 
        </h3>
        <h3>
            To know more about the refregirator project you can click on <span>'More'</span>. 
        </h3>`,
        more: `<a href="https://docs.google.com/presentation/d/18e636l75nlfDWRUQUgk3HTUKjh_qqNyOdnLf53usbhU/edit#slide=id.g35f391192_00" target="_blank">
        <button class="middle2__button">More</button>
        </a>`,
        vid: `https://www.youtube.com/embed/IklHF9jQogU`,
    },
    {
        id: 6,
        title: "Personal Website",
        category: "Web_Development",
        desc: `                    
        <h3>
            It all started with watching some freeCodeCamp and Udemy tutorials and imitating some of their landing webpages.
            I then got the inspiration to create my own website and to design it myself as well. 
            
        </h3>
        <h3> 
            I started out with Figma to visualize the design and to figure out how to place all the elements together. 
            After that, I used HTML, SCSS and JavaScript to bring my design to life. 
            I made sure it is responsive to all different screen sizes. I also made sure it is easy to navigate through it no 
            matter which device you are on. I used Gihub Webpages, afterwards to publish my website by commiting and pushing the code from VS Code 
            directly to Github. 
        </h3>
        <h3>
            As you can see by now since you are on the website, it has so much to tell you about who I am which was my goal for this project.   
        </h3>
        <h3> 
            Currently, I am learning more about JavaScript and React and applying what I learn to improve on this website everytime I get the chance to.
        </h3>
        <h3>
            To view the website, you can click on <span>'More'</span> below. 
        </h3>`,
        more: `<a href="https://github.com/FatimaLDL1997/FatimaLDL1997.github.io" target="_blank">
        <button class="middle2__button">More</button>
        </a>`,
        vid: `https://youtube.com/embed/WC-B1lJlcuo`,
    },
    {
        id: 7,
        title: "Meditation Website",
        category: "Web_Development",
        desc: `                    
        <h3>
            This website can help you calm down when stressed. Just 
            choose the sounds you want to hear and it will play in the 
            background. You can also watch the video in the background 
            as you listen to the music to help you focus even more. 
        </h3>
        <h3> 
            To check it out, you can click on <span>'More'</span> below. 
        </h3>`,
        more: `<a href="page5.html" target="_blank">
        <button class="middle2__button">More</button>
        </a>`,
        vid: `https://www.youtube.com/embed/6iDljWnuGQA`,
    },
  ];
  //dynamic population of html section using an array and js 
  const middle = document.querySelector(".middle2__content"); 
  const container = document.querySelector(".middle2__buttons"); 
  //load items 
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
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
      ['all']
    );
    const categoryBtns = categories
    .map(function(category){
    return `<button class="middle2__filter-btn" type="button" 
    data-id=${category}>
    ${category}
    </button>`;
    })
    .join("");
    container.innerHTML = categoryBtns; 
    const filterBtns = container.querySelectorAll(".middle2__filter-btn");
      
      
    //filter items     
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id; 
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    console.log(menuItem); 
                    return menuItem;  
                }
            });
            if(category === 'all'){
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
  
      return `<div class="middle2__project flex">
                
            <div class="middle2__text-container">
                <h1>${item.title}</h1>
                ${item.desc}

                ${item.more}

                </div>
                <div class="middle2__video ">
                    <iframe width="560" height="315" src="${item.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            
        </div>
                    
        <hr class="middle2__line" />`; 
    }) 
  
    displayMenu = displayMenu.join(" ");
    middle.innerHTML = displayMenu;
    // console.log("helloHi");
  }