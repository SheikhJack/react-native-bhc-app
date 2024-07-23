export default {
    name: 'maintenanceRequest',
    type: 'document',
    title: 'Maintenance Request',
    fields: [
      {
        name: 'fullName',
        type: 'string',
        title: 'Full Name',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address',
      },
      {
        name: 'phoneNumber',
        type: 'string',
        title: 'Phone Number',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of Issue',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'In Progress', value: 'inProgress' },
            { title: 'Completed', value: 'completed' },
          ],
        },
      },
    ],
  };
  