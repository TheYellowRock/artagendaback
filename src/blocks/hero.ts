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
            type: 'text'
        },
        {
            name:'subtitle',
            label: 'Subtitle',
            type: 'textarea'
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