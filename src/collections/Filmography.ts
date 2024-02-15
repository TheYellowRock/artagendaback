import { CollectionConfig } from "payload/types";

const Filmography : CollectionConfig = {
    slug: 'filmography',
    access: {
        read: () => true,
        update: () => true,
        create: () => true,
        delete: () => true,
      },
    labels: {
        singular: 'Filmography',
        plural: 'Filmography'
    },
    fields: [
        {
            name:'year',
            label: 'Year of Production',
            type: 'text'
        },
        {
            name: 'work',
            label: 'Movie or Serie',
            type: 'text'
        },
        {
            name: 'role',
            label: 'Role',
            type: 'text'
        }
    ]
}

export default Filmography