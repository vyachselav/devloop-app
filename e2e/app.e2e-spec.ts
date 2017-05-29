import { DevloopAppPage } from './app.po';

describe('devloop-app App', () => {
  let page: DevloopAppPage;

  beforeEach(() => {
    page = new DevloopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
