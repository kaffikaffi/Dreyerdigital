let working_experience = [
  {
    name: "MENY",
    title: "Butikkmedarbeider",
    place: "Drøbak",
    period: "Høst 2014 - høst 2017",
    logo: "img/meny.jpg",
    alt: "meny logo",
    descreption:
      "Jobbet som lager- og kassemedarbeider i 3 år mens jeg gikk på videregående. Hadde stengeansvar og varierte arbeidsoppgaver rundt i butikken.",
    category: ["sales_experience"],
    priority: 80
  },
  {
    name: "Nordisk Fiskeutstyr",
    title: "Salgsmedarbeider",
    place: "Lysaker",
    period: "Sommer 2018",
    logo: "img/nfisk.jpg",
    alt: "nfisk logo",
    descreption:
      "Var sesongansatt og drev stort sett med salg av fiskeutstyr og var til hjelp for kunder i butikk, over telefon og e-post.",
    category: ["sales_experience"],
    priority: 70
  },
  {
    name: "Dotkom",
    title: "Økonomiansvarlig",
    place: "Trondheim",
    period: "Høst 2019 - d.d",
    logo: "img/online.png",
    alt: "online-ikon logo",
    descreption:
      "Drift- og utviklingskomiteen (dotkom) er ansvarlig for nettsiden og driften rundt systemene til online.ntnu.no. Som komitemedlem/utvikler i dotkom er man med på å forbedre og utvikle tjenestene på weben. Teknologiene som blir brukt nå er for det meste Django, men vi jobber med en ny versjon av siden i React. For tiden jobber jeg på et komponent-bibliotek i React/typescript. ",
    category: ["programming_experience"],
    priority: 90
  },
  {
    name: "Junior Consulting",
    title: "Konsulent",
    place: "Trondheim",
    period: "Vår 2020 - d.d",
    logo: "img/jr.png",
    alt: "Junior consulting ikon logo",
    descreption:
      "Tech-konsulent i Junior Consulting som er et konsulentselskap drevet av NTNU-studenter",
    category: ["programming_experience"],
    priority: 100
  }
];

const compare = (a, b) =>
  a.priority > b.priority ? -1 : b.priority > a.priority ? 1 : 0;
const sortedJobs = working_experience.sort(compare);
sortedJobs.length = 4; //How many jobs that are showing

const categories = {
  programming_experience: "programmeringserfaring",
  sales_experience: "salgserfaring",
  everything: "all erfaring"
};
function showCategory() {
  const experience_ul = document.getElementById("experience-filter-ul");
  for (i in categories) {
    let li = document.createElement("li");
    li.textContent = categories[i];
    li.id = i;
    li.addEventListener("click", filterByCategory);
    experience_ul.appendChild(li);
  }
}
showCategory();

function filterByCategory(e) {
  let target_element = e.target.id;
  const category_sort = [];
  sortedJobs.forEach(element => {
    element.category.forEach(category_element => {
      if (target_element == category_element) {
        category_sort.push(element);
      }
    });
  });

  if (category_sort.length > 0) {
    clearUl(job_ul);
    renderArray(category_sort, job_ul);
  } else if (target_element == "everything") {
    clearUl(job_ul);
    renderArray(sortedJobs, job_ul);
  }
  return category_sort;
}
function clearUl(ul) {
  ul.textContent = "";
}
function renderArray(array, place) {
  array.forEach(element => {
    let li = document.createElement("li");
    li.className = "info-li";

    let container = document.createElement("section");
    container.className = "content-container";

    let header = document.createElement("header");
    header.className = "header-container";
    let h2 = document.createElement("h2");
    h2.className = "header-text";
    h2.textContent = `${element.title} - ${element.name}`;
    header.appendChild(h2);
    //uncomment when pictures are added to img. //header.appendChild(img)
    /*
    let img = document.createElement("img");
    img.className = "job-logo";
    img.src = element.logo;*/

    let from_to = document.createElement("p");
    from_to.className = "period-p";
    from_to.textContent = element.period;

    let info_descreption = document.createElement("p");
    info_descreption.className = "info-descreption";
    info_descreption.textContent = element.descreption;

    container.appendChild(header);
    container.appendChild(from_to);
    container.appendChild(info_descreption);
    li.appendChild(container);
    place.appendChild(li);
  });
}
const job_ul = document.getElementById("experience-list");
renderArray(sortedJobs, job_ul);

const education = [
  {
    title: "Informatikk",
    name: "NTNU Trondheim",
    place: "Trondheim",
    period: "2019 - d.d",
    logo: "img/NTNU.png",
    alt: "NTNU logo",
    descreption:
      "Informatikk er en 3-åring bachelor. Linja har en mye prosjektarbeid/gruppesammarbeid og vi programmerer masse i løpet av studiet."
  },
  {
    title: "Matteknologi",
    name: "NTNU Trondheim",
    place: "Trondheim",
    period: "2018 - 2019",
    logo: "img/NTNU.png",
    alt: "NTNU logo",
    descreption:
      "Gikk ett år på bachelor matteknologi. Året på matteknologi ga meg mye kunnskap om matproduksjon, utfordringene i matbransjen, og en god forståelse av mat generelt."
  },
  {
    title: "Sportsfiske",
    name: "Sund folkehøgskole",
    place: "Inderøy",
    period: "2017 - 2018",
    logo: "img/sund.png",
    alt: "Sund logo",
    descreption:
      "Ett år på folkehøgskole på linjen sportsfiske. Innebar mange forskjellige typer fiske både i havet, ferskvann og i elv. Var ofte på tur, sov mye ute, og lærte utrolig mye om natur og miljø. "
  },
  {
    title: "Studiespesialisering",
    name: "frogn VGS",
    place: "Drøbak",
    period: "2014 - 2017",
    logo: "img/frogn.png",
    alt: "frogn logo",
    descreption: "Studiespesialisering med realfag"
  }
];

const school_ul = document.getElementById("school-ul");
renderArray(education, school_ul);
