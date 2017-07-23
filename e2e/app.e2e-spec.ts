import { DoubeiPage } from './app.po';

describe('doubei App', () => {
  let page: DoubeiPage;

  beforeEach(() => {
    page = new DoubeiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
