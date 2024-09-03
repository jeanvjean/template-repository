/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import getTemplate from '.';

export const commonTemplate = (messageType, data) => `
  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <style>
          table, td, div, h1, p {font-family: Inter, sans-serif;}
      </style>
  </head>
  <body style="margin:0;padding:0;">
        ${getTemplate(messageType, data)} 
  </body>
  </html>`;
