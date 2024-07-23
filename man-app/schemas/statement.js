export default {
  name: 'statement',
  type: 'document',
  title: 'Statement',
  fields: [
    {
      name: 'customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      title: 'Customer',
    },
    {
      name: 'properties',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'house' }] }],
      title: 'Properties',
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
    },
    {
      name: 'generatedDate',
      type: 'datetime',
      title: 'Generated Date',
    },
  ],
};

  