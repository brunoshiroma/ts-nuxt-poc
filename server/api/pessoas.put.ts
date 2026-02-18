import { db, schema } from 'hub:db'
import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
    const { id, primeiroNome, ultimoNome }: { id: number, primeiroNome: string, ultimoNome: string } = await readBody(event)

    await db.update(schema.pessoas)
        .set({ primeiroNome, ultimoNome })
        .where(eq(schema.pessoas.id, id))

    const storage = useStorage('cache');
    await storage.clear('pessoas');
    return 'ok'
})