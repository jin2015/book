import { MyBookPage } from './app.po';

describe('my-book App', () => {
  let page: MyBookPage;

  beforeEach(() => {
    page = new MyBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
