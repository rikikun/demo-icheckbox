import { TestFrontPage } from './app.po';

describe('test-front App', () => {
  let page: TestFrontPage;

  beforeEach(() => {
    page = new TestFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
