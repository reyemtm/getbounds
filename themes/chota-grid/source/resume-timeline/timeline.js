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
    title: "GIS Consultant",
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
    employer: "Ohio Univeristy",
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
  .render([
    {
      cover: `Graduate Student`,
      timestamp: "2005-08-01",
    },
    {
      cover: "/assets/timeline/4x3_timeline-graduate-print-map-oaxaca-coffee-and-migration.jpg",
      timestamp: "2007-02-01",
    },
    {
      cover: "Mexican Coffe & Migration\nGraduate Project Final Map",
      timestamp: "2007-02-01",
    },
    {
      cover: "MGCP Data Example",
      timestamp: "2010-06-01",
    },
    {
      cover: "/assets/timeline/4x3_timeline-mgcp-afghanistan-0example-p18p1-lg.jpg",
      timestamp: "2010-06-01",
    },

    {
      cover: "/assets/timeline/4x3_timeline-forest-to-faucet-print-map.jpg",
      timestamp: "2012-06-01",
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
    },
    {
      cover: "/assets/timeline/4x3_timeline-safety-study-print-template.jpg",
      timestamp: "2016-04-01",
    },
    {
      cover: "Safety Study Print Template",
      timestamp: "2016-04-01",
    },
    {
      cover: "/assets/timeline/4x3_timeline-ohio-vehicle-crash-explorer-with-heatmap.png",
      timestamp: "2016-04-01",
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
    },
    {
      cover: "Bridge to Bridge Trail Map",
      timestamp: "2017-02-01",
    },
    {
      cover: "/assets/timeline/4x3_timeline-bridge-to-bridge.png",
      timestamp: "2017-02-01",
    },

    {
      cover: "/assets/timeline/4x3_timeline-zanesville-zoning-interactive-web-map.jpg",
      timestamp: "2018-09-01",
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
    },

    {
      cover: "/assets/img/4x3_potockivodka.jpg",
      timestamp: "2023-02-01",
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
      map: "LCT Transit Web Map",
      timestamp: "2024-02-01",
    },
  ]);

work.reverse();
const workTimeline = document.querySelector("#work .milestones");

function reformatTimeline() {
  const resume = document.querySelector(".resume");
  const width = window.innerWidth;
  if (width < 1340) {
    resume.style.transform = `scale(${width / 1360})`;
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
imgT.onEventClick((d) => {
  imgPreview.querySelector("img").src = d.target.src.replace("4x3", "lg");
  imgPreview.classList.add("modal-active");
});

//add event listener to close modal for esc key
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") imgPreview.classList.remove("modal-active");
});

imgPreview.addEventListener("click", () => {
  imgPreview.classList.remove("modal-active");
});

// imgT.onEventMouseLeave((d) => {
//  imgPreview.src = "";
//  imgPreview.opacity = 0;
//  imgPreview.transform = "scale(0)"
// })
