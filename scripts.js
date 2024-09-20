var projectIndex = 0;

function loadMoreProjects() {
	// console.log("The button was pressed");
    // projectIndex = projectIndex % projects.length; // To ensure index does not exceed array length
    if (projectIndex < projects.length){
        var projectDiv = document.createElement('div');
        projectDiv.id = "projectCard" + projectIndex.toString();

        projectDiv.innerHTML = `
        <div class="col s12 m6 l4">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img alt="music streaming app" src="` + projects[projectIndex].imgPath + `" style="height: 100%; width: 100%" class="activator" />
                    </div>
                    <div class="card-content">
                    <span id="singleProjectTitle" class="card-title activator teal-text hoverline">` + projects[projectIndex].title + `<i
                        class="mdi-navigation-more-vert right"></i></span>
                    <p>
                        ` + projects[projectIndex].description + `
                    </p>
                    </div>
                    <div class="card-reveal">
                    <!-- TODO: change this -- only close button -->
                    <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                    <span class="card-title grey-text"><small>Accomplishments</small><i
                        class="mdi-navigation-close right"></i></span>
                    <ul id=` + projects[projectIndex].explanationId + `></ul>
                    <div class="card-action">
                        <a aria-label="Visit the GitHub repo for  project" href=" `+ projects[projectIndex].link + ` "
                        target="_blank" data-position="top" data-tooltip="View Source"
                        class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                            class="fa fa-github"></i></a>
                    </div>
                    </div>
                </div>
        `;


        var projectContainer = document.getElementById("projectCardContainer");
        projectContainer.appendChild(projectDiv);  // Or specify a container instead of body

        var explanationBlock = document.getElementById(projects[projectIndex].explanationId);

        for (let i = 0; i < projects[projectIndex].explanation.length; i++) {
            var bulletPoint = document.createElement("li");
            bulletPoint.textContent = projects[projectIndex].explanation[i];

            explanationBlock.appendChild(bulletPoint);
        }
        projectIndex += 1;
    }
}

class Project {
    constructor(projectTitle, projectDescription, projectImagePath, projectExplanation, projectExplanationId, projectLink, projectDate) {
        this.title = projectTitle;
        this.description = projectDescription;
        this.imgPath = projectImagePath;
        this.explanation = projectExplanation;
        this.explanationId = projectExplanationId;
        this.link = projectLink;
        this.date = projectDate;
    }
}

var dinoProject = new Project("Dino Dodge", 
    "A visually enhanced remake of the classic Google Dino game, written in C and run on a DE1-SoC board.", 
    "/assets/img/dinosaur.png", 
    ["Starting with three lives, the objective is to survive for as long as possible, losing a life with each collision.",
        "The game runs on a NIOS II system and uses a PS/2 keyboard for controls and audio speakers for transitions.", 
        "Key features include a timer displayed on the DE1-SoC HEX display, lives represented by LEDs, and day/night mode toggled with a switch.", 
        "The game supports ducking, jumping, and hyperjumping with keyboard input and includes animated graphics like a running dinosaur and flying pterodactyls."], 
    "dinoDodgeExplanationBLock",
    "https://github.com/sarahsiddiqui/DinoDodge",
    20240910
);

var dexterityDash = new Project("Dexterity Dash", 
    "Reflex-testing game to aid in hand-eye coordination recovery for brain trauma patients.", 
    "/assets/img/button.png", 
    ["Integrated software and hardware components including custom button controllers, FPGA, VGA, and game software.", 
        "Utilized VGA for video output and designed the game architecture to run efficiently on hardware, ensuring real-time feedback and interaction."], 
    "dexterityDashExplanationBLock",
    "https://github.com/sarahsiddiqui/",
    20240909
);

var trailBlazer = new Project("TrailBlazer", 
    "A city mapping software with a responsive UI that includes optimized directions, a search bar for specific roads, and buttons to display map landmarks.", 
    "/assets/img/map.png", 
    ["Interactive map interface with multi-layer data overlays that enable users to access and manipulate infrastructure, demographic, and transportation datasets.",
        "Integrated OpenStreetMap API for real-time data and solved the Traveling Salesman Problem using multi-threading and unordered maps in C++.",
        "Utilized the GTK graphics library for visualization.</li>Integrated software and hardware components including custom button controllers, FPGA, VGA, and game software.", 
        "Utilized VGA for video output and designed the game architecture to run efficiently on hardware, ensuring real-time feedback and interaction."], 
    "trailBlazerExplanationBLock",
    "https://github.com/sarahsiddiqui/TrailBlazer",
    20240908
);

var frugiferry = new Project("Frugiferry", 
    "An automated food dispensing system to maintain the upkeep of gibbons at the Toronto Zoo.",
    "/assets/img/zoo.png", 
    ["Designed a pulley system to suspend and transport the food despenser to the gibbons.",
        "Designed a food dispenser that drops the food into the enclosure to mimic falling fruit.",
        "Maintains the safety of both the gibbon and the keeper by eliminating the need to enter the enclosure."], 
    "frugiferryExplanationBLock",
    "https://github.com/sarahsiddiqui/",
    20240907
);

var foldableDesk = new Project("Foldable Desk", 
    "A foldable desk for a lecture hall the University of Toronto that improves note-taking, comfort, and usability.",
    "/assets/img/lecture-hall.png", 
    ["The foldable desk increases the available surface area by approximately 180%, and accomodated both left and right handed students.",
        "The design was selected through a comparison of four concepts using Pugh Charts and pairwise comparison matrices, with oak wood and piano hinges chosen for their durability and ease of use."], 
    "foldableDeskExplanationBLock",
    "https://github.com/sarahsiddiqui/",
    20240906
);

var skinCancerClassifier = new Project("Skin Cancer Classifier", 
    "Deep learning Neural Network that classifies five types of skin lesions using dermatoscopic images to assist in early detection and diagnosis of skin cancer.",
    "/assets/img/robot.png", 
    ["Developed a model that incorporated Convolution Neural Networks (CNN) for extracting image features.",
        "Trained and tested the model on the HAM10000 and ISIC dataset, and received a 64.1% overall accuracy."], 
    "skinCancerClassifierExplanationBLock",
    "https://github.com/sarahsiddiqui/Skin-Cancer-Classifier",
    20240911
);

var projects = [dexterityDash, trailBlazer, frugiferry, foldableDesk, skinCancerClassifier];

projects.sort((a, b) => b.date - a.date);