import { pgTable, integer, varchar, timestamp, date } from "drizzle-orm/pg-core"

export const pessoas = pgTable('pessoas', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  primeiroNome: varchar(),
  ultimoNome: varchar(),
  nascimento: date(),
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
});