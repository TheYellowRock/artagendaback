import { CollectionConfig } from "payload/types";
import Hero from "../blocks/hero";

const Pages : CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages'
    },
    access: {
        read: () => true
    },
    fields:[
        {
            name:'title',
            label: 'Title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Hero
            ]
        }
    ]
}

export default Pages