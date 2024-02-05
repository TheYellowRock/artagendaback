import { CollectionConfig } from 'payload/types'

const Actors: CollectionConfig = {
    slug: 'actors',
    fields: [
        {
            name: 'Name',
            type: 'text',
            required: true
        },
        {
            name: 'Surname',
            type: 'text',
            required: true
        }
    ]
}
export default Actors