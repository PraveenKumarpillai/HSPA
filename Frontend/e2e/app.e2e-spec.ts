import { Myang1Page } from './app.po';

describe('myang1 App', function() {
  let page: Myang1Page;

  beforeEach(() => {
    page = new Myang1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
