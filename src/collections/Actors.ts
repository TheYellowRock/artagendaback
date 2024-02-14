import { CollectionConfig } from 'payload/types'
import Media from './Media'

const Actors: CollectionConfig = {
    slug: 'actors',
    access: {
        read: () => true,
        update: () => true,
        create: () => true,
        delete: () => true,
      },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true
        },
        {
            name: 'surname',
            label: 'Surname',
            type: 'text',
            required: true
        },
        {
            name: 'category',
            label: 'Category',
            type: 'select',
            hasMany: false,
            options:[
                {
                    label:'Men',
                    value: 'men'
                },
                {
                    label: 'Women',
                    value: 'women'
                },
                {
                    label: 'Young people',
                    value: 'young'
                }
            ]
        },
        //Appearances:
        {
            name:"appearances",
            type:"group",
            interfaceName:"Appearances",
            fields:[
                {
                    name: 'age',
                    label: 'Age',
                    type: 'number',
                    required: true
                },
                {
                    name: 'height',
                    label: 'Height (cm)',
                    type: 'number',
                    required: true
                },
                {
                    name: 'eyesColor',
                    label: 'Eyes Color',
                    type: 'text',
                }
            ]
        },
        //Education
        {
            name:"education",
            type:"group",
            interfaceName:"Education",
            fields:[
                {
                    name: 'degree',
                    label: 'Degree',
                    type: 'text'
                },
                {
                    name: 'graduationYear',
                    label: 'Graduation Year',
                    type: 'number'
                },
                {
                    name: 'establishement',
                    label: 'Establishement',
                    type: 'text',
                }
            ]
        },
        //Skills
        {
            name:"skills",
            type:"group",
            interfaceName:"Skills",
            fields:[
                {
                    name: 'instruments',
                    label: 'Instruments',
                    type: 'text'
                },
                {
                    name: 'singing',
                    label: 'Singing',
                    type: 'text'
                },
                {
                    name: 'dance',
                    label: 'Dance',
                    type: 'text',
                },
                {
                    name: 'languages',
                    label: 'Languages',
                    type: 'text',
                },
                {
                    name: 'others',
                    label: 'Other Skills',
                    type: 'text',
                }
            ]
        },
        //Images
        {
            name:'images',
            label: 'Images',
            type: 'relationship',
            hasMany: true,
            relationTo: 'media'
        },
        //Videos
        {
            name:'videos',
            label: 'Videos',
            type: 'relationship',
            hasMany: true,
            relationTo: 'media'
        },
        //Links
        {
            name:"links",
            type:"group",
            interfaceName:"Links",
            fields:[
                {
                    name: 'youtube',
                    label: 'Youtube Link',
                    type: 'text'
                },
                {
                    name: 'filmpolski',
                    label: 'FilmPolski Link',
                    type: 'text'
                },
                {
                    name: 'instagram',
                    label: 'Instagram Link',
                    type: 'text',
                }
            ]
        },
        //Filmography
        {
            name: 'filmography',
            label: 'Filmography',
            type: 'relationship',
            relationTo: 'filmography',
            hasMany: true
        }
    ]
}
export default Actors

