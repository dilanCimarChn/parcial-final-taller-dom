const { test } = require('node:test');
const assert = require('node:assert/strict');
const render = require('./render.cjs');
for (const [url, expected] of [['/about','About'],['/dashboard','Entregas de demostración'],['/unknown','Página no encontrada']]) {
  test('route '+url, async () => {
    const html = await render("import { AppRoutes } from './src/App.jsx';", `<MemoryRouter initialEntries={['${url}']}><AppRoutes /></MemoryRouter>`);
    assert.ok(html.includes(expected));
  });
}
test('empty assignments explained', async () => {
  assert.ok((await render("import Dashboard from './src/components/Dashboard.jsx';", '<Dashboard items={[]} />')).includes('No hay entregas'));
});
