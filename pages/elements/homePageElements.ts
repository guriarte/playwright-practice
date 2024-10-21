import { ReadOnlyElement } from '../../types/elements';

export class HomePageElements {
  static readonly pageName = 'Homepage';

  static readonly signInButton: ReadOnlyElement = {
    selector: '[data-test="nav-sign-in"]',
    description: `Sign In Button in ${this.pageName}`,
  };
}
