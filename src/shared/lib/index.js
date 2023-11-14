export const getPage = ({ body = "", title = "", meta = [] }) => {
    const defaultMeta = [ { charset: "UTF-8" }, { name: "viewport", content: "width=device-width, initial-scale=1.0" } ];
    if(meta.length === 0){
        meta.push(...defaultMeta);
    }
    return `
        <!doctype html>
        <html lang="ru">
            <head>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                ${meta.map((attrs) => {
                    const str = Object.entries(attrs)
                    .map(([ key, value ]) => `${key} = "${value}"`)
                    .join(" ");
                    return `<meta ${str}/>`;
                }).join("")}
                <title>${title}</title>
            </head>
        <body>
            ${body}
        </body>
    </html>
    `
}