import { PeliculasAppPage } from './app.po';

describe('peliculas-app App', () => {
  let page: PeliculasAppPage;

  beforeEach(() => {
    page = new PeliculasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
