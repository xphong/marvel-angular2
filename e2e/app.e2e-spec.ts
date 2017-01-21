import { MarvelAngular2Page } from './app.po';

describe('marvel-angular2 App', function() {
  let page: MarvelAngular2Page;

  beforeEach(() => {
    page = new MarvelAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
