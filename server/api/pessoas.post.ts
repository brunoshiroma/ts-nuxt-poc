import { db, schema } from 'hub:db'

export default defineEventHandler<{ body: { primeiroNome: string, ultimoNome: string, nascimento: string }, response: { message: string } }>(async (event) => {
  const { primeiroNome, ultimoNome, nascimento } = await readBody(event)

  await db.insert(schema.pessoas)
    .values({ primeiroNome, ultimoNome, nascimento: nascimento, created_at: new Date() })

  const storage = useStorage('cache');
  await storage.clear('pessoas');

  return 'ok'
})