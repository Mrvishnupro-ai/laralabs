import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType],
}
