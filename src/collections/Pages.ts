import { CollectionConfig } from "payload/types";
import Hero from "../blocks/hero";
import SimpleRichText from "../blocks/simpleRichText";
import ActorsGrid from "../blocks/actorsGrid";
import ContactBlock from "../blocks/contactBlock";

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
                Hero,
                SimpleRichText,
                ActorsGrid,
                ContactBlock
            ]
        }
    ]
}

export default Pages