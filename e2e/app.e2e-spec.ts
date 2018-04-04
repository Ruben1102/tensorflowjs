import { TensorAppPage } from './app.po';

describe('tensor-app App', () => {
  let page: TensorAppPage;

  beforeEach(() => {
    page = new TensorAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
