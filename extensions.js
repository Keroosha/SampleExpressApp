
module.exports.HtmlCoreTemplate = 
/**
 * 
 * @param {string} body - body content of page
 * @param {string} title - Title to <title> tag of head block
 */
function (body, title = "Page") {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
    </head>
    <body>
        ${body}
    </body>
    </html>
    `;
}