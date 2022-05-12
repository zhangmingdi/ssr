import { renderToString } from 'react-dom/server';

const app = express();

app.get('*', (req, res) => {
    const reactStr = renderToString(<Fruit />);

    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
  </head>
  <body>
      <div id="root">${reactStr}</div>
  </body>
  </html>`;

    return res.send(html);
});

app.listen(9999, () => console.log('node listen 9999'));
