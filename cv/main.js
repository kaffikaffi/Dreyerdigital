let working_experience = [
    job1 = {
        name: "MENY",
        title: "Butikkmedarbeider",
        place: "Drøbak",
        period: "Høst 2014 - høst 2017",
        logo: "img/meny.jpg",
        alt: "meny logo",
        descreption: "Jobbet som lager- og kassemedarbeider i 3 år mens jeg gikk på videregående. Hadde stengeansvar og varierte arbeidsoppgaver rundt i butikken.",
        priority: 80
    },
    job2 = {
        name: "Nordisk Fiskeutstyr",
        title: "Salgsmedarbeider",
        place: "Lysaker",
        period: "Sommer 2018",
        logo: "img/nfisk.jpg",
        alt: "nfisk logo",
        descreption: "Var sesongansatt og drev stort sett med salg av fiskeutstyr og var til hjelp for kunder i butikk, over telefon og e-post.",
        priority: 70
    },
    job3 = {
        name: "Dotkom",
        title: "Komiteemedlem",
        place: "Trondheim",
        period: "Høst 2019 - d.d",
        logo: "img/online.png",
        alt: "online-ikon logo",
        descreption: "Drift- og utviklingskomiteen (dotkom) er ansvarlig for nettsiden og driften rundt systemene til online.ntnu.no. Som komitemedlem/utvikler i dotkom er man med på å forbedre og utvikle tjenestene på weben. Teknologiene som blir brukt nå er for det meste Django, men vi jobber med en ny versjon av siden i React. For tiden jobber jeg på et komponent-bibliotek i React/typescript. ",
        priority: 100
    },
];

const compare = (a,b) => (a.priority > b.priority ? -1 : b.priority > a.priority ? 1 : 0);
let sortedJobs = working_experience.sort(compare)
sortedJobs.length = 3; //How many jobs that are showing

function renderArray(array,place) {

    array.forEach(element => {
        let li = document.createElement("li");
        li.className = "info-li";

        let container = document.createElement("section");
        container.className = "content-container";

        let header = document.createElement("header");
        header.className = "header-container";
        let h2 = document.createElement("h2");
        h2.className = "header-text";
        h2.textContent = `${element.title}
        ${element.name}
        `;
        /*
        let img = document.createElement("img");
        img.className = "job-logo";
        img.src = element.logo;*/ //uncomment when pictures are added to img. 

        //header.appendChild(img)
        header.appendChild(h2)

        let from_to = document.createElement("p");
        from_to.className = "period-p";
        from_to.textContent = element.period;

        let info_descreption = document.createElement("p");
        info_descreption.className = "info-descreption";
        info_descreption.textContent = element.descreption;

        container.appendChild(header)
        container.appendChild(from_to)
        container.appendChild(info_descreption)
        li.appendChild(container)
        place.appendChild(li)
    });
}
const job_ul = document.getElementById("experience-list");
renderArray(sortedJobs,job_ul)

let education = [
    school1 = {
        title: "Studiespesialisering",
        name: "frogn VGS",
        place: "Drøbak",
        period: "2014 - 2017",
        logo: "img/frogn.png",
        alt: "frogn logo",
        descreption: "Studiespesialisering med realfag",
    },
    school2 = {
        title: "Matteknologi",
        name: "NTNU",
        place: "Trondheim",
        period: "2018 - 2019",
        logo: "img/NTNU.png",
        alt: "NTNU logo",
        descreption: "Gikk ett år på bachelor matteknologi",
    },
    school3 = {
        title: "Informatikk",
        name: "NTNU",
        place: "Trondheim",
        period: "2019 - d.d",
        logo: "img/NTNU.png",
        alt: "NTNU logo",
        descreption: "3-åring bachelor",
    },
    school4={
        title: "Sportsfiske",
        name: "Sund folkehøgskole",
        place: "Inderøy",
        period: "2017 - 2018",
        logo: "img/sund.png",
        alt: "Sund logo",
        descreption: "Ett år på folkehøgskole på linjen sportsfiske."   
    }
];

const school_ul = document.getElementById("school-ul")
renderArray(education,school_ul)
