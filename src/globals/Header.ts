import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
    slug:'header',
    access: {
        read: () => true,
        update: () => true
      },
    fields:[
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
            name: 'submenu',
            label: 'Sub Menu',
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

export default Header