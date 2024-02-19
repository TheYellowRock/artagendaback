import { GlobalConfig } from "payload/types";

const Footer : GlobalConfig = {
    slug: 'footer',
    access: {
        read: () => true,
        update: () => true,
      },
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'navlinks',
            label: 'Navigation Links',
            type: 'array',
            fields: [
                {
                    name:'label',
                    label: 'Label',
                    type: 'text'
                },
                {
                    name:'link',
                    label: 'Link',
                    type: 'text'
                }
            ]
        },
        {
            name: 'metalinks',
            label: 'Meta Links',
            type: 'array',
            fields: [
                {
                    name:'label',
                    label: 'Label',
                    type: 'text'
                },
                {
                    name:'link',
                    label: 'Link',
                    type: 'text'
                }
            ]
        },
    ]  
}

export default Footer