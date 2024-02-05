import { Block } from "payload/types";

const Hero : Block = {
    slug:'hero',
    labels: {
        singular: 'Hero Block',
        plural: 'Hero Blocks'
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true
        },
        {
            name:'subtitle',
            label: 'Subtitle',
            type: 'textarea',
            required: true
        },
        {
            name: 'image',
            label : 'Image',
            type: 'upload',
            relationTo: 'media'
        }
    ]
}

export default Hero 