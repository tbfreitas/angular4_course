import { AppToTrainingPage } from './app.po';

describe('app-to-training App', () => {
  let page: AppToTrainingPage;

  beforeEach(() => {
    page = new AppToTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
