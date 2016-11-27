import { AngularFlaskHerokuExamplePage } from './app.po';

describe('angular-flask-heroku-example App', function() {
  let page: AngularFlaskHerokuExamplePage;

  beforeEach(() => {
    page = new AngularFlaskHerokuExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
