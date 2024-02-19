import { GlobalConfig } from "payload/types";

const Contact : GlobalConfig = {
    slug: 'contact',
    access: {
        read: () => true,
        update: () => true,
      },
    fields: [
        {
            name: 'addressLineOne',
            label: 'Address line 1',
            type: 'text'
        },
        {
            name: 'addressLineTwo',
            label: 'Address line 2',
            type: 'text'
        },
        {
            name: 'contactPerson',
            label: 'Contact person',
            type: 'array',
            fields: [
                {
                    name: 'picture',
                    label: 'Picture',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'role',
                    label: 'Role',
                    type: 'text',
                },
                {
                    name: 'fullname',
                    label: 'Fullname',
                    type: 'text',
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: 'text',
                },
                {
                    name: 'phone',
                    label: 'Phone Number',
                    type: 'text',
                }
            ]
        },
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'metaLinks',
            label: 'Meta Links',
            type: 'array',
            fields:[
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text'
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text'
                }
            ]
        }
    ]
}

export default Contact