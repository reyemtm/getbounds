---
img: beekeeper.png
author: Malcolm Meyer
title: Export GeoJSON from PostgreSQL using Beekeeper Studio
subtitle: Query > Download > Copy > Paste!
tags:
  - postgis
featured: true
categories:
  - blog
date: 2022-01-29 12:25:00
date_updated: 2024-01-05
---

_Update 2024-01-05: Added steps for saving a geojson file from pgAdmin._

[Beekeeper Studio](https://www.beekeeperstudio.io/) is an open source SQL editor written in NodeJS and Vue JS. The UI is clean and simple, and it has just the right amount of tools to get the job done. The query interface even has a handy **Download** button to export the results of a query. Using the ~~Copy to Clipboard~~ **Copy Cell** option we can extract GeoJSON directly from a PostGIS enabled PostgreSQL database to a computer without having to open QGIS or another GIS desktop or command-line tool.

1. Open Beekeeper Studio and copy the following query, replacing **your_table** with your table name, and changing the **geom** fields and **id** field if need be.

```SQL
SELECT jsonb_build_object(
    'type',     'FeatureCollection',
    'features', jsonb_agg(features.feature)
)
FROM (
  SELECT jsonb_build_object(
    'type',       'Feature',
    'id',         id,
    'geometry',   ST_AsGeoJSON(ST_Transform(geom, 4326), 8)::jsonb,
    'properties', to_jsonb(inputs) - 'geom'
  ) AS feature
  FROM (SELECT * FROM your_table) inputs) features;
```

2. After the script runs, use the ~~Download~~ **Copy Cell** option by right-clicking on the returned data to copy the contents to the clipboard.
3. Open a text editor such as [VS Code](https://code.visualstudio.com/) and paste the data.
4. ~~Use the **Home** button to go to the beginning of the text and delete "jsonb_build_object"~~.
5. Save the result as a **.geojson** file.

## Using pgAdmin

1. Execute the script above.
2. Double-click the results row - make sure the view is on `code`.
3. Copy and paste into a text editor and save as a **.geojson** file.

![pgAdmin code editor](/assets/img/pg-admin-geojson.jpg)

<script>
  (async () => {
    const data = await fetch("/.netlify/functions/spatial-sql?test=true").then(res => res.json());
    console.log(data)
  })()
</script>
