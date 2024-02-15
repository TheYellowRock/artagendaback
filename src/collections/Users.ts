import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
},
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
