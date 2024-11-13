import "maplibre-gl/dist/maplibre-gl.css";

import * as turf from "@turf/turf";

import maplibregl from "maplibre-gl";
import { parse } from "papaparse";

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  var rootPreference = document.documentElement.getAttribute("data-bs-theme");
  if (rootPreference === "light" || rootPreference === null) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    // setCookie("halfmoonColorMode", "dark", 365);
    const mapCanvas = document.querySelector(".maplibregl-canvas");
    if (mapCanvas) {
      mapCanvas.style.filter = "invert(1)";
    }
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
    // setCookie("halfmoonColorMode", "light", 365);
    const mapCanvas = document.querySelector(".maplibregl-canvas");
    if (mapCanvas) {
      mapCanvas.style.filter = "invert(0)";
    }
  }
}

const sidebar = document.getElementById("sidebar");
const sidebarToggles = document.getElementsByClassName("js-sidebar-toggle");
for (let i = 0; i < sidebarToggles.length; i++) {
  const t = sidebarToggles[i];
  t.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
}

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.0157, 52.2296],
      },
      properties: {
        name: "Johann Heinrich David Meier",
        born: "1826-09-14",
        deceased: "1899-01-12",
        generation: 5,
        born_in: {
          city: "Harbke",
          country: "Prussia",
        },
        died_in: {
          city: "Toronto",
          county: "Jefferson",
          state: "Ohio",
          country: "United States of America",
          coordinates: [-80.6001, 40.4642],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.0324, 52.2014],
      },
      properties: {
        name: "Sophie Frdericke Dorothee Jacobs",
        born: "1828-07-28",
        deceased: "1897-10-06",
        generation: 5,
        born_in: {
          city: "Sommerschenburg",
          county: "Sommersdorf",
          state: "Bördekreis",
          country: "Saxony-Anhalt, Germany",
        },
        died_in: {
          city: "Knoxville",
          county: "Jefferson",
          state: "Ohio",
          country: "United States of America",
          coordinates: [-80.6111, 40.3837],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.2119, 48.4966],
      },
      properties: {
        name: "Jacob Michael Weinman Sr.",
        born: "1842-10-09",
        deceased: "1923-07-11",
        generation: 5,
        born_in: {
          city: "Reutlingen",
          state: "Baden-Wurttemberg",
          country: "Germany",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
          coordinates: [-80.6334, 40.3698],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.3025, 48.6862],
      },
      properties: {
        name: 'Anna "Barbara" Eberle',
        born: "1847-05-07",
        deceased: "1933-12-12",
        generation: 5,
        born_in: {
          city: "Scharnhausen",
          county: "Esslingen",
          state: "Baden-Württemberg",
          country: "Germany",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
          coordinates: [-80.6334, 40.3698],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.5786, 41.0034],
      },
      properties: {
        name: "George Washington Coulter",
        born: "1851-03-31",
        deceased: "1921-01-10",
        generation: 5,
        born_in: {
          city: "Beaver Township",
          county: "Clarion County",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Beaver City",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.5586, 41.1933],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.4655, 41.3158],
      },
      properties: {
        name: 'Nancy Lucinda "Lucy" Weaver',
        born: "1851-05-07",
        deceased: "1942-01-19",
        generation: 5,
        born_in: {
          city: "Elk Twp",
          county: "Clarion County",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Knox",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.5364, 41.2378],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.5036, 41.1665],
      },
      properties: {
        name: 'Robert Paul "Daddy Bob" Hugus',
        born: "1857-01-11",
        deceased: "1935-01-31",
        generation: 5,
        born_in: {
          city: "Wentlings Corner",
          county: "Beaver Twp",
          state: "Clarion County",
          country: "USA",
        },
        died_in: {
          city: "Beaver City",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.5586, 41.1933],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.4036, 41.1965],
      },
      properties: {
        name: "Catharine Anna McElhattan",
        born: "1856-04-25",
        deceased: "1935-05-03",
        generation: 5,
        born_in: {
          county: "Clarion County",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Beaver",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.5586, 41.1933],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-80.0022, 40.4406],
      },
      properties: {
        name: "James Alexander Wilkinson",
        born: "1876-08-11",
        deceased: "1961-05-19",
        generation: 5,
        born_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Wilkinsburg",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.8805, 40.4412],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.6878, 41.1681],
      },
      properties: {
        name: "Cora Edna Green",
        born: "1876-01-23",
        deceased: "1941-01-02",
        generation: 5,
        born_in: {
          city: "Foxburg",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.9959, 40.4406],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.6639, 41.4092],
      },
      properties: {
        name: "Lawrence Edward Roche Sr.",
        born: "1867-04-21",
        deceased: "1926-02-14",
        generation: 5,
        born_in: {
          city: "Scranton",
          county: "Lackawanna",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.9959, 40.4406],
        },
      },
    },
  ],
};

const two = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.0157, 52.2296],
      },
      properties: {
        name: 'Andreas "Charley" Christian Herman Carl Meier',
        born: "1867-04-12",
        deceased: "1928-11",
        generation: 4,
        born_in: {
          city: "Harbke",
          county: "Bordekreis",
          state: "Saxony-Anhalt",
          country: "Germany",
        },
        died_in: {
          coordinates: null,
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-86.7816, 36.1627],
      },
      properties: {
        name: "Anna Christiana Weinman",
        born: "1872-02-11",
        deceased: "1955-04-07",
        generation: 4,
        born_in: {
          city: "Nashville",
          county: "Davidson",
          state: "Tennessee",
          country: "United States",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "United States",
          coordinates: [-80.6334, 40.3698],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.5786, 41.0034],
      },
      properties: {
        name: 'Charles "Cliff" Clifford Coulter',
        born: "1877-12-09",
        deceased: "1945-11-06",
        generation: 4,
        born_in: {
          city: "Beaver",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          county: "Clarion County",
          state: "Pennsylvania",
          country: "USA",
          coordinates: null,
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.5586, 41.1933],
      },
      properties: {
        name: "Lottie Mae Hugus",
        born: "1877-12-07",
        deceased: "1971-03-29",
        generation: 4,
        born_in: {
          city: "Beaver Township",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Clarion",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.3853, 41.2145],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-80.0812, 40.4314],
      },
      properties: {
        name: 'James "Jimmy" Walker Wilkinson',
        born: "1906-07-30",
        deceased: "1959",
        generation: 4,
        born_in: {
          city: "Crafton",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          state: "Illinois",
          country: "USA",
          coordinates: null,
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.9959, 40.4406],
      },
      properties: {
        name: "Selma Constance Roche",
        born: "1905-08-19",
        deceased: "1985-11-18",
        generation: 4,
        born_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "United States",
        },
        died_in: {
          city: "Allison Park",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
          coordinates: [-79.9571, 40.5595],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0632, 59.3293],
      },
      properties: {
        name: "Axel Wilhelm Falk",
        born: "1898-08-16",
        deceased: "1953-01-08",
        generation: 4,
        born_in: {
          city: "Klara",
          county: "Stockholm",
          state: "Stockholm",
          country: "Sweden",
        },
        died_in: {
          city: "Long Island City",
          county: "Queens",
          state: "New York",
          country: "USA",
          coordinates: [-73.945, 40.7447],
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.8033, 40.5718],
      },
      properties: {
        name: "Helen S. Brewer",
        born: "1904-12-20",
        deceased: "1993-09-13",
        generation: 4,
        born_in: {
          city: "Stanton",
          county: "Hunterdon County",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          city: "Ewing",
          county: "Mercer",
          state: "New Jersey",
          country: "USA",
          coordinates: [-74.7901, 40.2592],
        },
      },
    },
  ],
};

const three = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.0157, 52.2296],
      },
      properties: {
        name: 'Andreas "Charley" Christian Herman Carl Meier',
        born: "1867-04-12",
        deceased: "1928-11",
        generation: 4,
        born_in: {
          city: "Harbke",
          county: "Bordekreis",
          state: "Saxony-Anhalt",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-86.7816, 36.1627],
      },
      properties: {
        name: "Anna Christiana Weinman",
        born: "1872-02-11",
        deceased: "1955-04-07",
        generation: 4,
        born_in: {
          city: "Nashville",
          county: "Davidson",
          state: "Tennessee",
          country: "United States",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "United States",
          latlng: { lat: 40.3698, lng: -80.6334 },
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.5786, 41.0034],
      },
      properties: {
        name: 'Charles "Cliff" Clifford Coulter',
        born: "1877-12-09",
        deceased: "1945-11-06",
        generation: 4,
        born_in: {
          city: "Beaver",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          county: "Clarion County",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.5586, 41.1933],
      },
      properties: {
        name: "Lottie Mae Hugus",
        born: "1877-12-07",
        deceased: "1971-03-29",
        generation: 4,
        born_in: {
          city: "Beaver Township",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Clarion",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-80.0812, 40.4314],
      },
      properties: {
        name: 'James "Jimmy" Walker Wilkinson',
        born: "1906-07-30",
        deceased: "1959",
        generation: 4,
        born_in: {
          city: "Crafton",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          state: "Illinois",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.9959, 40.4406],
      },
      properties: {
        name: "Selma Constance Roche",
        born: "1905-08-19",
        deceased: "1985-11-18",
        generation: 4,
        born_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "United States",
        },
        died_in: {
          city: "Allison Park",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0632, 59.3293],
      },
      properties: {
        name: "Axel Wilhelm Falk",
        born: "1898-08-16",
        deceased: "1953-01-08",
        generation: 4,
        born_in: {
          city: "Klara",
          county: "Stockholm",
          state: "Stockholm",
          country: "Sweden",
        },
        died_in: {
          city: "Long Island City",
          county: "Queens",
          state: "New York",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.8033, 40.5718],
      },
      properties: {
        name: "Helen S. Brewer",
        born: "1904-12-20",
        deceased: "1993-09-13",
        generation: 4,
        born_in: {
          city: "Stanton",
          county: "Hunterdon County",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          city: "Ewing",
          county: "Mercer",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
  ],
};

const four = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-80.7124, 40.3443],
      },
      properties: {
        name: "Charles Herman Meyer",
        born: "1904-02-29",
        deceased: "1988-05-13",
        born_in: {
          city: "Island Creek Twp.",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
          latlng: { lat: 40.3698, lng: -80.6334 },
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-80.6095, 40.3209],
      },
      properties: {
        name: 'Ethel Lucy "Pinky" Coulter',
        born: "1911-11-27",
        deceased: "2003-05-07",
        born_in: {
          city: "Mingo Junction",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
          latlng: { lat: 40.3698, lng: -80.6334 },
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.9959, 40.4406],
      },
      properties: {
        name: "Malcolm Allan Wilkinson",
        born: "1926-03-28",
        deceased: "1994-11-17",
        born_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Steubenville",
          county: "Jefferson",
          state: "Ohio",
          country: "USA",
          latlng: { lat: 40.3698, lng: -80.6334 },
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.7429, 40.2171],
      },
      properties: {
        name: 'Elaine Augusta "Dolly" Falk',
        born: "1924-03-15",
        deceased: "1982-11-15",
        born_in: {
          city: "Trenton",
          county: "Mercer",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          city: "Princeton",
          county: "Mercer",
          state: "New Jersey",
          country: "USA",
          latlng: { lat: 40.3573, lng: -74.6672 },
        },
      },
    },
  ],
};

const five = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.7332, 52.3759],
      },
      properties: {
        name: "Herm Heinrich Meier",
        born: "1818-02",
        deceased: "1890-01-29",
        generation: 7,
        born_in: {
          city: "Hanover",
          state: "Lower Saxony",
          country: "Germany",
        },
        died_in: {
          city: "Bellevue",
          county: "Jackson",
          state: "Iowa",
          country: "United States",
        },
      },
    },
    {
      type: "Feature",
      geometry: null,
      properties: {
        name: "Sophie Ernstine Catherina Flaken",
        deceased: "Unknown",
        generation: 7,
        born_in: {
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.9167, 52.3167],
      },
      properties: {
        name: "Johann Heinrich Christoph Meier",
        born: "1757-02-13",
        deceased: "1826-05-05",
        generation: 7,
        born_in: {
          city: "Hartum",
          county: "Minden-Lübbecke",
          state: "North Rhine-Westphalia",
          country: "Germany",
        },
        died_in: {
          city: "Hahlen",
          county: "Minden-Lübbecke",
          state: "North Rhine-Westphalia",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.0712, 52.2542],
      },
      properties: {
        name: "Anne Louise Dorothee Brandies",
        born: "1753",
        deceased: "1827-12-02",
        generation: 7,
        born_in: {
          city: "Reinsen",
          county: "Stadthagen",
          state: "Schaumburg-Lippe",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: null,
      properties: {
        name: "Johann Andreas Jacobs",
        generation: 7,
      },
    },
    {
      type: "Feature",
      geometry: null,
      properties: {
        name: "Marie",
        generation: 7,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.2124, 48.4916],
      },
      properties: {
        name: "Jacob Michael Weinmann",
        born: "1784-02-12",
        deceased: "1847-10-01",
        generation: 7,
        born_in: {
          city: "Reutlingen",
          state: "Baden-Württemberg",
          country: "Germany",
        },
        died_in: {
          city: "Reutlingen",
          state: "Baden-Württemberg",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.2054, 48.4933],
      },
      properties: {
        name: "Friedricke Beckh",
        born: "1789-02-03",
        deceased: "1852-03-29",
        generation: 7,
        born_in: {
          city: "Reutlingen",
          state: "Baden-Württemberg",
          country: "Germany",
        },
        died_in: {
          city: "Reutlingen",
          state: "Baden-Württemberg",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: null,
      properties: {
        name: "Johannes Knapp",
        deceased: "Unknown",
        generation: 7,
      },
    },
    {
      type: "Feature",
      geometry: null,
      properties: {
        name: "Anna Marie Ruoff",
        deceased: "Unknown",
        generation: 7,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.9576, 48.7256],
      },
      properties: {
        name: "Johann Jakob Eberle",
        born: "1770-10-30",
        deceased: "1831-10-06",
        generation: 7,
        born_in: {
          city: "Magstadt",
          state: "Württemberg",
          country: "Germany",
        },
        died_in: {
          city: "Magstadt",
          state: "Württemberg",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.9576, 48.7256],
      },
      properties: {
        name: "Anna Maria Schuettenhelm",
        born: "1773-04-12",
        deceased: "1845-04-23",
        generation: 7,
        born_in: {
          city: "Magstadt",
          state: "Württemberg",
          country: "Germany",
        },
        died_in: {
          city: "Magstadt",
          county: "Boblingen",
          state: "Baden-Württemberg",
          country: "Germany",
        },
      },
    },
  ],
};

const six = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.2639, 48.6945],
      },
      properties: {
        name: "Johann Georg Herrmann",
        born: "1771-11-14",
        deceased: "1832-07-04",
        generation: 7,
        born_in: {
          city: "Scharnhausen",
          state: "Württemberg",
          country: "Germany",
        },
        died_in: {
          city: "Scharnhausen",
          state: "Württemberg",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.2639, 48.6945],
      },
      properties: {
        name: "Agnes Catharina Kaiser",
        born: "1771-04-08",
        deceased: "1832-01-25",
        generation: 7,
        born_in: {
          city: "Scharnhausen",
          state: "Stuttgart",
          country: "Germany",
        },
        died_in: {
          city: "Scharnhausen",
          state: "Württemberg",
          country: "Germany",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.396, 39.8617],
      },
      properties: {
        name: "Nathaniel, III Coulter",
        born: "1759-02-18",
        deceased: "1839-01-27",
        generation: 7,
        born_in: {
          city: "Chester",
          county: "Delaware County",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "White Deer",
          county: "Northumberland",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-81.0924, 40.769],
      },
      properties: {
        name: "Margaretta 'Peggy/Betsy' Best",
        born: "1809-12-16",
        deceased: "1879-09-27",
        generation: 7,
        born_in: {
          city: "Westmoreland",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Beaver City",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.6667, 40.266],
      },
      properties: {
        name: "George Peter Delo",
        born: "1809-12-08",
        deceased: "1889-04-12",
        generation: 7,
        born_in: {
          county: "Venango County",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Beaver Township",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.4184, 40.315],
      },
      properties: {
        name: "Andrew J Weaver Rev",
        born: "1782-09-16",
        deceased: "1870-10-07",
        generation: 7,
        born_in: {
          city: "Lebanon",
          county: "Lancaster",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Pine Valley",
          county: "Venango",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.195, 40.3638],
      },
      properties: {
        name: "Catharine Schreffler",
        born: "1786-11-06",
        deceased: "1882-04",
        generation: 7,
        born_in: {
          city: "Rehrersburg",
          county: "Berks",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Richland",
          county: "Venango",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-78.9275, 39.8145],
      },
      properties: {
        name: "Henry (Heinrich) Hockman",
        born: "1787-07-24",
        deceased: "1861-05-29",
        generation: 7,
        born_in: {
          city: "Somerset",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Ashland",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.7671, 40.4694],
      },
      properties: {
        name: "Anna Marie 'Mary' Feeser",
        born: "1789",
        deceased: "1875-09-03",
        generation: 7,
        born_in: {
          city: "Bethel",
          county: "Lebanon County",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Ashland Township",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
  ],
};

const eight = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.2687, 41.1584],
      },
      properties: {
        name: "Paul Hugus Sr.",
        born: "1803-08-29",
        deceased: "1882-07-10",
        generation: 7,
        born_in: {
          city: "Hempfield",
          county: "Westmoreland",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Beaver",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.334, 40.5884],
      },
      properties: {
        name: "Sarah A Wiant (Wygand, Wint)",
        born: "1807-01-19",
        deceased: "1886-08",
        generation: 7,
        born_in: {
          city: "Lower Saucon",
          county: "Northampton",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Beaver City",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.8234, 41.3986],
      },
      properties: {
        name: "Robert Alexander Taylor",
        born: "1804",
        deceased: "1876-03-30",
        generation: 7,
        born_in: {
          city: "Somerset OR Centre",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Oakland",
          county: "Venango",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-82.547, 39.837],
      },
      properties: {
        name: "Margret Griffen",
        born: "1813",
        deceased: "1880-03-31",
        generation: 7,
        born_in: {
          city: "Somerset",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Berne",
          county: "Fairfield",
          state: "Ohio",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-78.0343, 40.8536],
      },
      properties: {
        name: "Robert M McElhattan",
        born: "1780",
        deceased: "1852",
        generation: 7,
        born_in: {
          city: "Half Moon",
          county: "Centre",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Knox",
          county: "Clarion",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-78.0343, 40.8536],
      },
      properties: {
        name: "Margaret Chambers",
        born: "1790",
        deceased: "1835",
        generation: 7,
        born_in: {
          county: "Centre",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Ferguson",
          county: "Centre",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.2181, 39.2904],
      },
      properties: {
        name: "Levi Black",
        born: "1795-05-27",
        deceased: "1871-06-01",
        generation: 7,
        born_in: {
          state: "Maryland",
          country: "USA",
        },
        died_in: {
          city: "Beaver Township",
          county: "Venango",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.425, 39.423],
      },
      properties: {
        name: "Anna Elizabeth 'Eliza' Keefer/Kiefer",
        born: "1794-09-16",
        deceased: "1884-01-25",
        generation: 7,
        born_in: {
          city: "Frederick",
          state: "Maryland",
          country: "USA",
        },
        died_in: {
          city: "Beaver Township",
          county: "Clarion Co.",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-3.5895, 54.5555],
      },
      properties: {
        name: "Alexander Wilkinson II",
        born: "1825-05-03",
        deceased: "1886-05-09",
        generation: 7,
        born_in: {
          city: "Whitehaven",
          county: "Cumberland",
          country: "UK",
        },
        died_in: {
          city: "Whitehaven",
          county: "Cumberland",
          country: "UK",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-1.617439, 54.978252],
      },
      properties: {
        name: "Elizabeth Martin Charlesworth",
        born: "1815",
        deceased: "1892",
        generation: 7,
        born_in: {
          city: "Newcastle-upon-Tyne",
          county: "Tyne and Wear",
          country: "England",
        },
        died_in: {
          city: "Sculcoates",
          county: "Yorkshire East Riding",
          country: "UK",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-2.5879, 53.3926],
      },
      properties: {
        name: "William Ferguson",
        born: "1819-06-27",
        deceased: "1896-04-08",
        generation: 7,
        born_in: {
          city: "Warrington",
          county: "Lancashire",
          country: "England",
        },
        died_in: {
          city: "Chorlton",
          county: "Lancashire",
          country: "UK",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-1.8466, 53.5913],
      },
      properties: {
        name: "Hannah Ellam Bottomly",
        born: "1818",
        deceased: "1852-10",
        generation: 7,
        born_in: {
          city: "Meltham",
          county: "Yorkshire",
          country: "England",
        },
        died_in: {
          city: "Chorlton",
          county: "Lancashire",
          country: "UK",
        },
      },
    },
  ],
};

const nine = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.1945, 41.2033],
      },
      properties: {
        name: "Holiday Walker Green",
        born: "1808-07-04",
        deceased: "1888-03-30",
        generation: 7,
        born_in: {
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.1945, 41.2033],
      },
      properties: {
        name: "Sarah Brown",
        born: "1823-09-11",
        deceased: "1897-11-25",
        generation: 7,
        born_in: {
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-80.0035, 40.4406],
      },
      properties: {
        name: "George W Reynolds",
        born: "1832-10-22",
        deceased: "1863-10-03",
        generation: 7,
        born_in: {
          city: "9th Ward Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
        died_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.486, 51.312],
      },
      properties: {
        name: "Henriette Schlagel",
        born: "1836-12-02",
        deceased: "1918-08-14",
        generation: 7,
        born_in: {
          region: "Hesse-Kassel / Hessen-Kassel / Electorate of Hesse / Kurhessen",
          country: "Germany",
        },
        died_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.309, 54.7877],
      },
      properties: {
        name: "Frank or Lawrence (Miles) Wren",
        born: "1799",
        deceased: "1885",
        generation: 7,
        born_in: {
          region: "Northern Ireland",
          country: "United Kingdom",
        },
        died_in: {
          city: "Scranton",
          county: "Lackawanna",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.309, 54.7877],
      },
      properties: {
        name: "Margaret Murray",
        born: "1799",
        deceased: "1844-06",
        generation: 7,
        born_in: {
          region: "Northern Ireland",
          country: "United Kingdom",
        },
        died_in: {
          city: "Scranton",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.405, 52.52],
      },
      properties: {
        name: "Heinrich Wilhelm Albert Liebau (Trebus)",
        born: "1830-01-18",
        generation: 7,
        born_in: {
          city: "Berlin",
          region: "Brandenburg",
          country: "Germany",
        },
        died_in: {
          city: "Pittsburgh",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [7.406, 49.541],
      },
      properties: {
        name: "Johann Andreas Andrew Dechlar",
        born: "1810-11-12",
        deceased: "1871-03-28",
        generation: 7,
        born_in: {
          city: "Etschberg",
          county: "Kusel",
          state: "Rhineland-Palatinate",
          country: "Germany",
        },
        died_in: {
          city: "Birmingham",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [7.408, 49.544],
      },
      properties: {
        name: "Catharina Theobald",
        born: "1820",
        deceased: "1894-07-28",
        generation: 7,
        born_in: {
          city: "Rehweiler",
          county: "Kusel",
          state: "Pfalz",
          country: "Germany",
        },
        died_in: {
          city: "Pittsburgh",
          county: "Allegheny",
          state: "Pennsylvania",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.303, 56.264],
      },
      properties: {
        name: "Jonas Magnus Falck",
        born: "1790",
        deceased: "1870-05-12",
        generation: 7,
        born_in: {
          city: "Oderljunga",
          municipality: "Perstorp",
          county: "Kristianstad",
          country: "Sweden",
        },
        died_in: {
          city: "Välinge",
          municipality: "Helsingborg",
          county: "Malmöhus",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.448, 63.165],
      },
      properties: {
        name: "Carin Andersdr",
        born: "1787-11-30",
        generation: 7,
        born_in: {
          city: "Frösö",
          county: "Jämtland",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [14.458, 63.072],
      },
      properties: {
        name: "Jöns Wallsten",
        born: "1784-11-14",
        deceased: "1867-01-30",
        generation: 7,
        born_in: {
          city: "Oviken",
          county: "Jämtland",
          country: "Sweden",
        },
        died_in: {
          city: "Oviken",
          county: "Jämtland",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [14.458, 63.072],
      },
      properties: {
        name: "Brita Nilsdotter",
        born: "1788-12-10",
        deceased: "1872-02-28",
        generation: 7,
        born_in: {
          city: "Oviken",
          county: "Jämtland",
          country: "Sweden",
        },
        died_in: {
          city: "Ovikens Moder",
          county: "Jämtland",
          country: "Sweden",
        },
      },
    },
  ],
};

const ten = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.464, 58.287],
      },
      properties: {
        name: "Johan Olofsson",
        born: "1799-10-29",
        deceased: "1853-10-24",
        generation: 7,
        born_in: {
          city: "Broddetorp Parish",
          county: "Skaraborgs län",
          country: "Sweden",
        },
        died_in: {
          city: "Laholm",
          region: "Halland",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.465, 58.288],
      },
      properties: {
        name: "Casja Pettersdotter",
        born: "1802-10-29",
        deceased: "1842",
        generation: 7,
        born_in: {
          city: "Frässegården",
          village: "Röxtorp",
          parish: "Norra Lundby",
          county: "Skaraborgs län",
          country: "Sweden",
        },
        died_in: {
          village: "Gisslagården",
          parish: "Stora Lycke",
          county: "Skaraborgs län",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.558, 58.353],
      },
      properties: {
        name: "Andreas Hakansson",
        born: "1798-12-01",
        deceased: "1852-10-27",
        generation: 7,
        born_in: {
          village: "Torstensgarden",
          parish: "Segerstad",
          county: "Skaraborgs län",
          country: "Sweden",
        },
        died_in: {
          village: "Käringboden",
          parish: "Brunnhem",
          county: "Skaraborgs län",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.559, 58.354],
      },
      properties: {
        name: "Maria Svensdotter",
        born: "1791-08-17",
        deceased: "1863-01-23",
        generation: 7,
        born_in: {
          village: "Quarnegaard",
          parish: "Sjögerstad",
          county: "Skaraborgs län",
          country: "Sweden",
        },
        died_in: {
          parish: "Brunnhem",
          county: "Skaraborgs län",
          country: "Sweden",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.8783, 40.5605],
      },
      properties: {
        name: "Benjamin Brewer",
        born: "1806-09-20",
        deceased: "1875-10-18",
        generation: 7,
        born_in: {
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          township: "Franklin",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.8783, 40.5605],
      },
      properties: {
        name: "Euphemia (Effie Effy) C. Pownell",
        born: "1807-03-22",
        deceased: "1873-09-17",
        generation: 7,
        born_in: {
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          township: "Franklin",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.8604, 40.5126],
      },
      properties: {
        name: "Asa J Cronce",
        born: "1825-02-22",
        deceased: "1881-06-24",
        generation: 7,
        born_in: {
          city: "Flemington",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          city: "Raritan",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.8604, 40.5126],
      },
      properties: {
        name: "Deborah P Carkhuff (Carkoff)",
        born: "1824-04",
        deceased: "1897-10-11",
        generation: 7,
        born_in: {
          city: "Flemington",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          city: "Raritan",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.889, 40.578],
      },
      properties: {
        name: "Zachariah Smith Sheets",
        born: "1831-04",
        deceased: "1910-01-14",
        generation: 7,
        born_in: {
          city: "Lebanon",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          cemetery: "Newell",
          city: "Stanton",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.889, 40.578],
      },
      properties: {
        name: "Catherine Ann Hill",
        born: "1840-09-03",
        deceased: "1931-03-26",
        generation: 7,
        born_in: {
          state: "New Jersey",
          country: "USA",
        },
        died_in: {
          city: "Lebanon",
          county: "Hunterdon",
          state: "New Jersey",
          country: "USA",
        },
      },
    },
  ],
};

const allData = geojson.features
  .concat(two.features)
  .concat(three.features)
  .concat(four.features)
  .concat(five.features)
  .concat(six.features)
  .concat(eight.features)
  .concat(nine.features)
  .concat(ten.features);

const additional = [...eight.features, ...nine.features, ...ten.features];

allData.forEach((feature) => {
  feature.properties.born_city = feature.properties.born_in?.city ?? null;
  feature.properties.born_state = feature.properties.born_in?.state ?? null;
  feature.properties.born_country = feature.properties.born_in?.country ?? null;
  feature.properties.born_county = feature.properties.born_in?.county ?? null;
  feature.properties.born_region = feature.properties.born_in?.region ?? null;
  feature.properties.died_city = feature.properties.died_in?.city ?? null;
  feature.properties.died_state = feature.properties.died_in?.state ?? null;
  feature.properties.died_country = feature.properties.died_in?.country ?? null;
  feature.properties.died_county = feature.properties.died_in?.county ?? null;
  feature.properties.died_region = feature.properties.died_in?.region ?? null;
  feature.properties.born_coords = feature.geometry?.coordinates?.join(",") ?? null;
  feature.properties.died_coords = feature.properties.died_in?.coordinates?.join(",") ?? null;
  delete feature.properties.born_in;
  delete feature.properties.died_in;
  feature.properties.id = Math.random().toString(36).substring(2, 15);
});

// additional.forEach((feature) => {
//   feature.properties.born_city = feature.properties.born_in?.city ?? null;
//   feature.properties.born_state = feature.properties.born_in?.state ?? null;
//   feature.properties.born_country = feature.properties.born_in?.country ?? null;
//   feature.properties.born_county = feature.properties.born_in?.county ?? null;
//   feature.properties.died_city = feature.properties.died_in?.city ?? null;
//   feature.properties.died_state = feature.properties.died_in?.state ?? null;
//   feature.properties.died_country = feature.properties.died_in?.country ?? null;
//   feature.properties.died_county = feature.properties.died_in?.county ?? null;
//   feature.properties.born_coords = feature.geometry?.coordinates?.join(",") ?? null;
//   feature.properties.died_coords = feature.properties.died_in?.coordinates?.join(",") ?? null;
//   delete feature.properties.born_in;
//   delete feature.properties.died_in;
//   feature.properties.id = Math.random().toString(36).substring(2, 15);
//   feature.properties.born_region = feature.properties.born_in?.region ?? null;

// });
// console.log(additional.map((e) => e.properties));

console.log(allData.map((e) => e.properties));

/*{lat: 43.45291889355465, lng: -30.410156250000004} 4/*/

const map = new maplibregl.Map({
  style: "https://tiles.openfreemap.org/styles/positron",
  center: [-30.410156250000004, 43.4529188],
  zoom: 3,
  container: "app",
});

const generationFilter = document.getElementById("generation-filter");

const template = (gen) => {
  return `<button type="button" class="list-group-item list-group-item-action active" aria-current="true" id="gen-${gen}" >Generation ${gen}</button>`;
};

generationFilter.innerHTML = new Array(7)
  .fill(0)
  .map((_, i) => template(i + 1))
  .join("");

let generationArray = new Array(7).fill(0).map((_, i) => i + 1);

const generations = generationFilter.querySelectorAll(".list-group-item");
generations.forEach((gen) => {
  gen.addEventListener("click", (e) => {
    const gen = e.target.id.split("-")[1];

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      generationArray = generationArray.filter((e) => e !== +gen);
    } else {
      e.target.classList.add("active");
      generationArray.push(parseInt(gen));
    }
    map.setFilter("points", ["in", ["get", "generation"], ["literal", generationArray]]);
    map.setFilter("points_resting", ["in", ["get", "generation"], ["literal", generationArray]]);
    map.setFilter("lines", ["in", ["get", "generation"], ["literal", generationArray]]);
  });
});

map.on("load", async function () {
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "none";
  spinner.classList.remove("d-flex");

  const csv = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdJLr4bycOSUo6_NsASEp-MaJtYs4k68pfBU8O7m6GvF9ip2IR-UsQ3p9X_DFO1gUs1qO1AycopEHR/pub?gid=1478532567&single=true&output=csv"
  ).then((response) => response.text());

  const { data } = parse(csv, { header: true, dynamicTyping: true });
  console.log(data);
  const liveData = data.map((e) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: e?.born_coords?.split(",")?.map((e) => parseFloat(e)) ?? [0, 0],
      },
      properties: e,
    };
  });

  // console.log(liveData);

  map.addSource("points", {
    type: "geojson",
    attribution: "<a href='www.getbounds.com'>&copy; getBounds</a> | Malcolm Meyer",
    data: {
      type: "FeatureCollection",
      features: liveData,
    },
  });

  map.addLayer({
    id: "points",
    type: "circle",
    source: "points",
    paint: {
      "circle-radius": 6,
      "circle-color": "#ff7800",
      "circle-stroke-color": "#000",
      "circle-stroke-width": 2,
      "circle-opacity": 0.8,
    },
  });

  const restingPoints = [];
  liveData.forEach((e) => {
    if (e.properties.died_coords) {
      restingPoints.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: e.properties.died_coords.split(",").map((e) => parseFloat(e)),
        },
        properties: e.properties,
      });
    }
  });

  map.addLayer({
    id: "points_resting",
    type: "circle",
    //black with white paint
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: restingPoints,
      },
    },
    paint: {
      "circle-radius": 6,
      "circle-color": "#000",
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 2,
      "circle-opacity": 0.8,
    },
  });

  map.on("mouseenter", "points", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "points", function () {
    map.getCanvas().style.cursor = "";
  });

  const lines = liveData.filter((e) => e.properties.died_coords);
  const bezierLines = lines.map((f) => {
    f.geometry = turf.bezierSpline(
      turf.lineString([
        f.geometry.coordinates,
        turf.midpoint(
          turf.point(f.geometry.coordinates),
          turf.point(f.properties.died_coords.split(",").map((e) => parseFloat(e)))
        ).geometry.coordinates,
        f.properties.died_coords.split(",").map((e) => parseFloat(e)),
      ]),
      {
        sharpness: 0.85,
      }
    ).geometry;
    return f;
  });

  map.addSource("lines", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: bezierLines,
    },
  });
  console.log(bezierLines);
  map.addLayer({
    id: "lines",
    type: "line",
    source: "lines",
    paint: {
      "line-color": "#ff7800",
      "line-width": 2,
    },
  });
  //lines highlighting the path
  map.addLayer({
    id: "lines_highlight",
    type: "line",
    source: "lines",
    paint: {
      "line-color": "black",
      "line-width": 4,
    },
    filter: ["==", ["get", "id"], ""],
  });
  // map.on("click", "lines", function (e) {
  //   console.log(e.features[0].properties);
  // });

  map.on("click", "points", function (e) {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const props = e.features[0].properties;
    Object.keys(props).forEach((key) => {
      if (key === "born_in" || key === "died_in") {
        props[key] = JSON.parse(props[key]);
      }
      if (props[key] === "") {
        props[key] = "Unknown";
      }
    });
    const { name, born, deceased, generation } = props;
    console.log(props);

    if (map.getLayer("lines_highlight")) {
      map.setFilter("lines_highlight", ["==", "born_coords", e.features[0].properties.born_coords]);
    }

    new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(
        `<h3>${name}</h3>
        <p>Born: ${born ?? "Unknown"}</p>
        <p>Died: ${deceased ?? "Unknown"}</p>
        <p>Generation: ${generation ?? "Unknown"}</p>
        <p>Birth Place: ${props?.born_city ?? "Unknown"}, ${props?.born_state ?? "Unknown"}${
          props?.born_region ? `, ${props.born_region}` : ""
        }, ${props?.born_country ?? "Unknown"}</p>
        <p>Resting Place: ${props?.died_city ?? "Unknown"}, ${props?.died_state ?? "Unknown"}, ${
          props?.died_country ?? "Unknown"
        }</p>`
      )
      .on("close", function () {
        map.setFilter("lines_highlight", ["==", "id", ""]);
      })
      .addTo(map);
  });
});

/*LEAFLET*/

// const map = L.map("app", {
//   center: [43.45291889355465, -30.410156250000004],
//   zoom: 4.25,
//   zoomSnap: 0.25,
//   zoomControl: false,
// });

//add osm
// const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "",
// }).addTo(map);

// const dataLayer = L.geoJSON(
//   allData.filter((e) => e?.geometry?.coordinates?.length),
//   {
//     pointToLayer: function (feature, latlng) {
//       //circles
//       return L.circleMarker(latlng, {
//         radius: 6,
//         fillColor: "#ff7800",
//         color: "#000",
//         weight: 2,
//         opacity: 1,
//         fillOpacity: 0.8,
//       });
//     },
//   }
// ).addTo(map);

// dataLayer.eachLayer(function (layer) {
//   layer.bindPopup(
//     `<h1>${layer.feature?.properties?.name ?? "Unknown"}</h1>
//     <p>Born: ${layer.feature?.properties?.born ?? "Unknown"}</p>
//     <p>Died: ${layer.feature?.properties?.deceased ?? "Unknown"}</p>
//     <p>Generation: ${layer.feature?.properties?.generation ?? "Unknown"}</p>
//     <p>Born in: ${layer.feature?.properties?.born_in?.city ?? "Unknown"}, ${
//       layer.feature?.properties?.born_in?.state ?? "Unknown"
//     }, ${layer.feature?.properties?.born_in?.country ?? "Unknown"}</p>
//     <p>Died in: ${layer.feature?.properties?.died_in?.city ?? "Unknown"}, ${
//       layer.feature?.properties?.died_in?.state ?? "Unknown"
//     }, ${layer.feature?.properties?.died_in?.country ?? "Unknown"}</p>`
//   );
// });

// map.on("contextmenu", function (e) {
//   //log the center and zoom
//   console.log(map.getCenter(), map.getZoom());
// });
