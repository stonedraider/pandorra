import { PandorraPage } from './app.po';

describe('pandorra App', function() {
  let page: PandorraPage;

  beforeEach(() => {
    page = new PandorraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
