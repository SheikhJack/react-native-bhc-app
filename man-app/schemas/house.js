export default {
    name: 'house',
    type: 'document',
    title: 'House',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'lng',
        type: 'number',
        title: 'Longitude',
      },
      {
        name: 'lat',
        type: 'number',
        title: 'Latitude',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'stars',
        type: 'number',
        title: 'Stars',
      },
      {
        name: 'reviews',
        type: 'string',
        title: 'Reviews',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'For Sale', value: 'forSale' },
            { title: 'For Rent', value: 'forRent' },
          ],
        },
      },
      {
        name: 'price',
        type: 'string',
        title: 'Price',
      },
    ],
  };
  