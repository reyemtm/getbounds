// import * as querystring from "querystring";

// import sql from "../../js/db.js"

import * as wkx from "wkx"

import client from "../js/db-pg";

export async function handler(event, context) {

  // client.connect()

  // console.log(context)

  const query = event.queryStringParameters.sql || "select * from addresses limit 1"
  console.log(query)
  
  try {
    const data = await client.query(query).then(res => res.rows)
    const geojson = {
      type: "FeatureCollection",
      features: []
    };
    if (data.length && data[0].geom) {
      data.forEach(row => {
        const geometry = wkx.Geometry.parse(new Buffer.from(data[0].geom, 'hex')).toGeoJSON();
        // const keys = Object.keys(row).filter(k => k !== "geom");
        const properties = row;
        properties["geom"].delete
        geojson.features.push({
          type: "Feature",
          geometry: geometry,
          properties: properties
        })
      })
      return {
        statusCode: 200,
        body: JSON.stringify(geojson)
      }
    }else{
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    }
  }catch(err) {
    console.log(JSON.stringify({err: err.toString()}))
    return {
      statusCode: 500,
      body: JSON.stringify({message: err.toString()})
    }
  }
}

// export  async function handler(event, context) {
//   // Only allow POST
//   // if (event.httpMethod !== "POST") {
//   //   return { statusCode: 405, body: "Method Not Allowed" };
//   // }

//   console.log(event.queryStringParameters)

//   try {
//     const query = event.queryStringParameters.sql || "select * from addresses limit 1"
//     const Query = sql`select * from addresses limit 1`
    
//     console.log(Query)
//     const data = await Query
//     // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
//     // console.log(data)
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data)
//     }
//   } catch(err) {
//     console.log(JSON.stringify({err: err.toString()}))
//     return {
//       statusCode: 500,
//       body: JSON.stringify({message: err.toString()})
//     }
//   }

// };