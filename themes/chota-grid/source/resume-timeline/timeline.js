const config = {
  minWidth: 1200,
};

const work = [
  {
    id: 0,
    title: " ",
    start_date: "2024-02-01",
    end_date: "Present",
    employer: " ",
  },
  {
    id: 1,
    title: "Owner & Developer",
    start_date: "2022-02-01",
    end_date: "Present",
    employer: "- Present GETBOUNDS LLC",
  },
  {
    id: 2,
    title: "GIS Coordinator",
    start_date: "2021-02-01",
    end_date: "2022",
    employer: "City of Lancaster",
  },
  {
    id: 3,
    title: "GIS Specialist",
    start_date: "2018-08-01",
    end_date: "2021",
    employer: "City of Zanesville",
  },
  {
    id: 4,
    title: "Transportation Planning Coordinator",
    start_date: "2016-01-02",
    end_date: "2018",
    employer: "OVRDC",
  },
  {
    id: 5,
    title: "Research & Planning Specialist",
    start_date: "2015-02-01",
    end_date: "2016",
    employer: "OVRDC",
  },
  {
    id: 6,
    title: "GIS Technician",
    start_date: "2013-02-01",
    end_date: "2014",
    employer: "City of Columbus ",
  },

  //  {
  //  id: 8,
  //  title: "P/T Park Ranger",
  //  start_date: "2011-02-01",
  //  end_date: "2014",
  //  employer: "Freelance"
  // },
  {
    id: 8,
    title: "GIS Technician",
    start_date: "2012-02-01",
    end_date: "2013",
    employer: "EMH&T",
  },
  {
    id: 7,
    title: "GIS Consultant",
    start_date: "2011-02-01",
    end_date: "2014",
    employer: "Freelance",
  },
  {
    id: 9,
    title: "GIS Quality Control Technician",
    start_date: "2010-02-01",
    end_date: "2011",
    employer: "CACI Inc",
  },
  {
    id: 10,
    title: "MA International Affairs|2005-2007",
    start_date: "2005-02-01",
    end_date: "2007",
    employer: "Ohio University",
  },
];

const portfolio = [
  {
    cover: `Graduate Student`,
    timestamp: "2005-08-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-graduate-print-map-oaxaca-coffee-and-migration.jpg",
    timestamp: "2007-02-01",
    info: "This map was part of a series of projects for my graduate research around Mexican migration to the United States. This piece in particular highlights coffee production in the southern state of Oaxaca along with household migration. The thesis was that a higher level of coffee production would lead to greater community cohesion and thus less household migration. \n\nThe map was prepared with ArcGIS Desktop.",
  },
  {
    cover: "Mexican Coffee & Migration\nGraduate Project Final Map",
    timestamp: "2007-02-01",
  },
  {
    cover: "MGCP Data Example",
    timestamp: "2010-06-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-mgcp-afghanistan-0example-p18p1-lg.jpg",
    timestamp: "2010-06-01",
    info: "At CACI Inc, I was part of an international team that worked on the Multi-national Geospatial Co-production Program (MGCP) for the National Geospatial-Intelligence Agency (NGA). This program was a collaboration between the US and its allies to create a single, seamless, and accurate geospatial foundation for the world. This MGCP sample image shows the types of data digitized.",
  },

  {
    cover: "/assets/timeline/4x3_timeline-forest-to-faucet-print-map.jpg",
    timestamp: "2012-06-01",
    info: "Created for the National Network of Forest Practitioners, this map was part of a series designed to highlight the importance of forests in providing clean water.\n\nThe maps were prepared with ArcGIS Desktop.",
  },
  {
    cover: "Forest to Faucet Map Series",
    timestamp: "2012-06-01",
  },
  {
    cover: "Columbus Field Check Map",
    timestamp: "2014-02-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-columbus-field-check-map-with-inset.jpg",
    timestamp: "2014-02-01",
    info: "This map was created for the City of Columbus to help in locating and verifying imperious areas throughout the city.\n\nThe map was prepared with ArcGIS Desktop.",
  },
  {
    cover: "/assets/timeline/4x3_timeline-safety-study-print-template.jpg",
    timestamp: "2016-04-01",
    info: "As part of my work as the Transportation Coordinator at OVRDC, I created this visualization to highlight the results of a safety study.\n\nThe map was prepared with ArcGIS Desktop and MS Office.",
  },
  {
    cover: "Safety Study Print Template",
    timestamp: "2016-04-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-ohio-vehicle-crash-explorer-with-heatmap.png",
    timestamp: "2016-04-01",
    info: "This web map was created to easily visualize and analyze vehicle crash data for the OVRDC region.\n\nThe application was developed with Mapbox GL JS and Google's Material Design CSS.",
    link: "https://www.ovrdc.org/apps/accident-explorer.html#9/39.0813/-82.9028",
  },

  {
    cover: "Savvy Web Map Award|Vehicle Crash Explorer",
    timestamp: "2016-04-01",
  },
  {
    cover: "Ohio GIS - Best Digital Map|Ohio Block Group Explorer",
    timestamp: "2017-02-01",
  },
  {
    cover: `/assets/timeline/4x3_timeline-ohio-block-group-explorer-explorer-story-with-3d-views.png`,
    timestamp: "2017-02-01",
    info: "Using a similar template as the vehicle crash explorer, I created this web application to visualize and analyze block group data for the entire state of Ohio. The app contains a story component that steps through a few highlights from the data. It won the Best Interactive Map award at the 2017 Ohio GIS Conference. \n\nThe application was developed with Mapbox GL JS and Google's Material Design CSS.",
    link: "https://www.ovrdc.org/apps/block-group-explorer.html#8/40.389/-82.462/-33.8/60",
  },
  {
    cover: "Bridge to Bridge Trail Map",
    timestamp: "2017-02-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-bridge-to-bridge.png",
    timestamp: "2017-02-01",
    info: "This map was created for Scioto County for the Bridge to Bridge bike trail. It won the Best Small Format map award at the 2017 Ohio GIS Conference.\n\nThe map was prepared using ArcGIS Pro.",
  },

  {
    cover: "/assets/timeline/4x3_timeline-gpx.png",
    timestamp: "2018-09-01",
    info: "This project uses the medium of GPS tracks to explore the linking of charts and maps. The application has a dark and light theme with custom map styles for each. The display can be exported to a an image by clicking in the upper right corner of the visualization.\n\nThe application was developed with Mapbox GL JS and Chart JS.",
    link: "https://reyemtm.github.io/gpx-visualize/?theme=dark",
  },
  {
    cover: "GPX Viewer",
    timestamp: "2018-09-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-zanesville-zoning-interactive-web-map.jpg",
    timestamp: "2018-09-01",
    info: "Created to replace the traditional paper zoning map, this web map allows users to easily find zoning information for any property in the city of Zanesville. The interface won the Best Interactive Map award at the 2018 Ohio GIS Conference.\n\nThe application was developed with Mapbox GL JS, PostgreSQL, and a custom vector tile server.",
    link: "https://gis.coz.org/internal/mapzville/?debug=true&coz_zoning=true#14/39.94324/-82.00813",
  },
  {
    cover: "Ohio GIS - Best Digital Map|Zanesville Zoning Map",
    timestamp: "2018-09-01",
  },
  {
    cover: "Lancaster Sanitary Sewer Trace App",
    timestamp: "2021-02-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-sewer-trace.png",
    timestamp: "2021-02-01",
    info: "Created as an internal tool to assist with finding errors in the digitized sanitary sewer network, this web application uses a tool I built while working at the City of Zanesville that traces linear networks in the browser.\n\nThe application was developed with Mapbox GL JS and static data.",
    link: "https://www2.ci.lancaster.oh.us/geoportal/apps/sewer-trace/",
  },

  {
    cover: "/assets/timeline/4x3_timeline-h3.png",
    timestamp: "2023-02-01",
    info: "This tool allows a user to explore H3 grid indices at various zoom levels to help determine the appropriate index for data visualization and analysis. \n\nThe tool was developed with Mapbox GL JS, h3-js and Turf JS.",
    link: "https://h3grids.getbounds.com/#11.86/39.97106/-82.98344",
  },
  {
    cover: "H3 Grids",
    timestamp: "2023-02-01",
  },
  {
    cover: "/assets/timeline/4x3_potockivodka.jpg",
    timestamp: "2023-02-01",
    info: "Potocki Vodka is a premium vodka brand from Poland. This unique take on the traditional store finder uses a globe view and a user's location to help users find the nearest store to purchase their product. It is a standalone app embedded into a WordPress site.\n\nThe application was developed with Mapbox GL JS, custom CSS, and static store data.",
    link: "https://potockivodka.com/store-finder/",
  },
  {
    cover: "Potocki Vodka Finder",
    timestamp: "2023-02-01",
  },
  {
    cover: "LCT Transit Web Map",
    timestamp: "2024-02-01",
  },
  {
    cover: "/assets/timeline/4x3_timeline-lct.png",
    timestamp: "2024-02-01",
    info: "Created for Etch and Licking County Transit, this Next JS fullstack app features on-demand GTFS feed generation, and an interactive map and route list.\n\nThe application was developed with Next JS and Mapbox GL JS.",
    link: "https://transit.lickingcounty.gov/",
  },
];

milestones("#work")
  .mapping({ timestamp: "start_date", text: "title" })
  .labelFormat(`%Y`)
  .optimize(true)
  // .distribution("top")
  .render(work);

const imgT = milestones("#timeline")
  .mapping({
    timestamp: "timestamp",
    text: "cover",
  })
  // .parseTime('%Y-%M')
  .aggregateBy("month")
  // .optimize(true)
  .useLabels(true)
  .labelFormat(`%Y`)
  // .autoResize(false)
  // .orientation("vertical")
  // .distribution("bottom")
  // .useLabels(false)
  .render(portfolio);

work.reverse();
const workTimeline = document.querySelector("#work .milestones");

function reformatTimeline() {
  const resume = document.querySelector(".resume");
  const width = window.innerWidth;
  if (width < 1340) {
    resume.style.transform = `scale(${width / 1380})`;
  } else {
    resume.style.transform = "scale(1)";
  }

  setTimeout(() => {
    const items = workTimeline.querySelectorAll(".wrapper");

    items.forEach((item, i) => {
      if (items.length !== work.length) return;
      if (i === items.length - 1) {
        item.parentElement.remove();
      }
    });

    const images = document.querySelectorAll("img");
    images.forEach((img) => (img.src = img.src.replace(".jpg", ".webp").replace(".png", ".webp")));
    document.querySelector(".resume").style.opacity = 1;

    const labels = document.querySelectorAll(".milestones-label");
    labels.forEach((label) => {
      let text = label.innerText.split("|");
      label.innerText = text[0];
      if (text.length === 1) return;
      text.forEach((t, i) => {
        if (i === 0) return;
        const child = document.createElement("span");
        child.innerText = t;
        const breakEl = document.createElement("br");
        label.after(breakEl);
        breakEl.after(child);
      });
    });
  }, 50);
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    setTimeout(() => {
      const items = workTimeline.querySelectorAll(".wrapper");

      items.forEach((item, i) => {
        item.querySelector(".milestones__group__label__text__title").innerText +=
          " " + work[i].employer;
      });
      reformatTimeline();
    }, 100);
  }
};

window.onresize = () => {
  reformatTimeline();
};

const imgPreview = document.querySelector("#preview");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", () => {
  imgPreview.classList.remove("modal-active");
});
modalOverlay.addEventListener("click", () => {
  imgPreview.classList.remove("modal-active");
});

imgT.onEventClick((d) => {
  imgPreview.querySelector(".modal-img").src = d.target.src.replace("4x3", "lg");
  imgPreview.classList.add("modal-active");
  console.log(d.target.src.split("/").pop());
  const text = portfolio.find(
    (p) => p.cover.split("/").pop().split(".")[0] === d.target.src.split("/").pop().split(".")[0]
  );
  console.log(text);
  imgPreview.querySelector("#caption").innerText = text?.info || "";
  if (text?.link) {
    imgPreview.querySelector(
      "#caption-link"
    ).innerHTML = `<a href="${text.link}" target="_blank" style="margin-top: 0.5rem">View App</a>`;
  } else {
    imgPreview.querySelector("#caption-link").innerHTML = "";
  }
});

//add event listener to close modal for esc key
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") imgPreview.classList.remove("modal-active");
});

portfolio.forEach((p) => {
  //if the cover is an image, replace the png or jpg with webp and load it
  if (p.cover.includes(".jpg") || p.cover.includes(".png")) {
    setTimeout(() => {
      const img = new Image();
      img.src = p.cover.replace(".jpg", ".webp").replace(".png", ".webp");
      //now load the image so that when it gets used it's already fetched
      img.onload = () => {
        console.log("loaded");
      };
    }, 3000);
  }
});

// imgT.onEventMouseLeave((d) => {
//  imgPreview.src = "";
//  imgPreview.opacity = 0;
//  imgPreview.transform = "scale(0)"
// })
