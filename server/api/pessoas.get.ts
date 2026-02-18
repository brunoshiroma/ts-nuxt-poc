import { db, schema } from '@nuxthub/db'

export default defineCachedFunction(async () => {
  return await db.select().from(schema.pessoas)
}, {
  maxAge: 10,
  staleMaxAge: 10,
  group: 'pessoas',
  shouldInvalidateCache: () => true
})