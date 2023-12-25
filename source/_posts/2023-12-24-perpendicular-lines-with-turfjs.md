---
title: Finding Perpendicular lines with TurfJS
subtitle: Bearing, LineIntersect & Destination
author: Malcolm Meyer
tags:
  - web maps
  - turf js
categories:
  - blog
date: 2024-12-24
canonical: https://observablehq.com/@reyemtm/finding-perpendicular-lines-with-turfjs
img: 90degline.jpg
excerpt: "In a recent project I needed to determine the perpendicular distance from a single point (C) to a line created by two other points (A and B)."
---

<iframe width="100%" height="676" frameborder="0"
  src="https://observablehq.com/embed/@reyemtm/finding-perpendicular-lines-with-turfjs?cells=container"></iframe>

In a recent project I needed to determine the perpendicular distance from a single point (C) to a line created by two other points (A and B). Normally we could just use the `turf.nearestPointOnLine()`, however that only works if the third point lies in between the first two points. In this case the point C could be anywhere, not necessarily between the points A and B. Therefore the distance needs to be measured along a line perpendicular to an imaginary infinite line created by points A and B. This can be accomplished with a few other turf functions - `turf.bearing()`, `turf.destination()` and `turf.lineIntersect()` - along with the slope of the line.

## Get the Slope and Extend the Line

The function below returns an extended line with two additional points representing the X and Y intercept from two points whose Y and X are taken from point C, respectively. Now that we have this extended line we can be sure that the third point does indeed fall between our two new points. At this point we could use `turf.nearestPointOnLine()`, but this tends to have a small but significant margin of error. To improve the accuracy of our measurement we can use the `turf.lineIntersect()` function.

```Javascript
const lines = turf.featureCollection([]);
const slope = (b[1] - a[1]) / (b[0] - a[0]);
const point1 = [c[0], slope \* (c[0] - a[0]) + a[1]];
const point2 = [(c[1] - a[1]) / slope + a[0], c[1]];

const lineArray = [a, b, point1, point2];
lineArray.sort((a, b) => b[0] - a[0]);
lines.features.push(turf.lineString(lineArray));
```

## Create a Perpendicular Line to Line AB

```Javascript
const bearing1 = turf.bearing(a, b);
const { geometry: p90 } = turf.destination(
  turf.point(c),
  turf.distance(a, c),
  bearing + 90
);
const { geometry: p91 } = turf.destination(
turf.point(c),
  turf.distance(a, c),
  bearing - 90
);
const perpendicularLine = turf.lineString([p90.coordinates, p91.coordinates]);
lines.features.push(perpendicularLine);
```

Using `turf.bearing()` we can create a perpendicular line using the distance from point C to either points A or B, then adding and subtracting 90 from this bearing. We can use this distance because unless point C is exactly 90 degrees from either points A or B, this distance will always be greater than the perpendicular distance to our extended line.

## Find our Target Point and Distance

Now that we have this perpendicular line we can finally use `turf.lineIntersect()` to get our target point along our extended line with which to measure the distance to point C.

```Javascript
const intersectingPoint = turf.lineIntersect(
  lines.features[0],
  lines.features[1]
);

const distance = turf.distance(intersectingPoint.features[0], turf.point(c), {
 units: "miles"
});
```
