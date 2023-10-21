export async function up(knex) {
	await knex.schema.table('directus_settings', (table) => {
		table.string("mv_hash").defaultTo('').notNullable();
		table.timestamp("mv_ts", { useTz: true }).defaultTo('2020-01-01').notNullable();
		table.boolean("mv_locked").defaultTo(false).notNullable();
	});
}

export async function down(knex) {
	await knex.schema.table('directus_settings', (table) => {
		table.dropColumn("mv_hash");
		table.dropColumn("mv_ts");
		table.dropColumn("mv_locked");
	});
}
