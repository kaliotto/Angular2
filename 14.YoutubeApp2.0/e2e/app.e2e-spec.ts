import { Ap2Page } from './app.po';

describe('ap2 App', () => {
  let page: Ap2Page;

  beforeEach(() => {
    page = new Ap2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
