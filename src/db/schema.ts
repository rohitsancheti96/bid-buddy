import { pgTable, serial } from "drizzle-orm/pg-core";

export const users = pgTable("bb_bids", {
  id: serial("id").primaryKey().notNull(),
});
