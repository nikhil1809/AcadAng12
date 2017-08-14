import { AcadAssign12Page } from './app.po';

describe('acad-assign12 App', () => {
  let page: AcadAssign12Page;

  beforeEach(() => {
    page = new AcadAssign12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
