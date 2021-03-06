const base = require('airtable').base(process.env.AIRTABLE_BASE_ID)
const table = base(process.env.AIRTABLE_TABLE_NAME)
const options = {
  view: `Live view - don't change!`,
  fields: [`id`, `serviceCode`],
}

export default async function getStories() {
  const records = await table.select(options).all()
  return records.map(r => r.fields)
}
