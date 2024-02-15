import { CollectionConfig } from "payload/types";

const Media : CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Media'
    },
    access: {
        read: () => true,
        update: () => true,
        create: () => true,
        delete: () => true,
    },
    upload:true,
    fields: [
        {
            name:'alt',
            label: 'Alt',
            type:'text'
        }
    ]
}

export default Media