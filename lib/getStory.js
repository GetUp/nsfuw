const base = require('airtable').base(process.env.AIRTABLE_BASE_ID)
const table = base(process.env.AIRTABLE_TABLE_NAME)

export default async function getStory(id) {
  try {
    const record = await table.find(`rec${id}`)
    return record.fields
  } catch (error) {
    console.error(error)
    return { serviceCode: '', story: '' }
  }
}
