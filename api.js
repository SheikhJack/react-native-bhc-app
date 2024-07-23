

import client from './Sanity';

let sanityQuery = (query, params) => client.fetch(query, params);


export const getHouses = () =>{
    return sanityQuery(`
        *[_type == "house"]{
          _id,
          name,
          description,
          price,
          category,
          stars,
          reviews,
          address,
          "imageUrl": image.asset->url,
          lat,
          lng,
          _createdAt,
          _updatedAt
        }
        `)
}

export const getPropertyCategory = ()=>{
    return sanityQuery(`
        *[_type == "propertyCategory"]{
            _id,
            title,
            description,
            houses[]->{
              _id,
              name,
              image{
                asset->{
                  url
                }
              },
              description,
              lat,
              lng,
              address,
              stars,
              reviews,
              category,
              price,
              _createdAt,
              _updatedAt
            }
          }`)
}

export const getHousesById = id=>{
    return sanityQuery(`

        *[_type == "house" && _id == $id]{
      _id,
      name,
      description,
      price,
      category,
      stars,
      reviews,
      address,
      "imageUrl": image.asset->url,
      lat,
      lng,
      _createdAt,
      _updatedAt
    }
        `)
}