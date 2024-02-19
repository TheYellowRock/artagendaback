import { Block } from "payload/types";

const SimpleRichText : Block = {
    slug: 'simpleRichText',
    labels: {
        singular: 'Simple Rich Text Block',
        plural: 'Simple Rich Text blocks'
    },
    fields:[
        {
            name: 'body',
            label: 'Body',
            type: 'richText'
        }
    ]
}

export default SimpleRichText