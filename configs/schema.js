import { pgTable, serial, varchar} from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl').notNull(),
    subscription:varchar('subscription').default(false)
})