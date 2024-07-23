export default {
    name: 'propertyCategory',
    type: 'document',
    title: 'Property Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'houses',
        type: 'array',
        title: 'Houses',
        of: [{ type: 'reference', to: { type: 'house' } }],
      },
    ],
  };
  