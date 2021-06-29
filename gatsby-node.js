const path = require('path')
const { google } = require('googleapis')

exports.createPages = async ({ actions }) => {
    const { createPage } = actions

    const cupboard = path.resolve(`./src/templates/cupboard.js`)

    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })
    const sheets = google.sheets({ version: 'v4', auth })
    const renderData = []
    let stillDataLeft = true
    for (let step = 1; stillDataLeft; step++) {
        process.stdout.write('Downloading ' + step + ' link\r')
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: `links!A${step}:C${step}`,
        })
        const rows = res.data.values
        if (rows && rows.length) {
            renderData.push(rows[0])
        } else {
            stillDataLeft = false
        }

        if (step > 300) {
            // good to have a limit
            stillDataLeft = false
        }
    }

    createPage({
        path: '/',
        component: cupboard,
        context: {
            data: renderData,
        },
    })
}
