export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(
      `
      <!DOCTYPE html>
      <html lang="pt">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zifolio</title>
      </head>
      <body>
        <h1>Zifolio</h1>
        <p>Educação financeira simples para Angola.</p>
      </body>
      </html>
      `,
      {
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
        },
      }
    );
  },
};