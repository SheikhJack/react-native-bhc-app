export default {
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
      {
        name: 'property',
        type: 'reference',
        to: [{ type: 'house' }],
        title: 'Property',
      },
      {
        name: 'amount',
        type: 'number',
        title: 'Amount',
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Payment Date',
      },
      {
        name: 'paymentMethod',
        type: 'string',
        title: 'Payment Method',
        options: {
          list: [
            { title: 'PayPal', value: 'paypal' },
            { title: 'Credit Card', value: 'creditCard' },
            { title: 'Bank Transfer', value: 'bankTransfer' },
          ],
        },
      },
      {
        name: 'status',
        type: 'string',
        title: 'Payment Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Failed', value: 'failed' },
          ],
        },
      },
    ],
  };
  