const base = require('airtable').base(process.env.AIRTABLE_BASE_ID)
const table = base(process.env.AIRTABLE_TABLE_NAME)

exports.handler = async (event, _context) => {
  try {
    const fields = JSON.parse(event.body)
    await table.create(fields)
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error }),
    }
  }
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: "Success!" }),
  }
}
