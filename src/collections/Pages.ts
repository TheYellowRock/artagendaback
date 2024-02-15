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
            type: 'text'
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text'
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