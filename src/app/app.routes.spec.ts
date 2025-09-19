import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

describe('App Routing', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    }).compileComponents();

    harness = await RouterTestingHarness.create();
  });

  it('should navigate to /home and render HomeComponent', async () => {
    const home = await harness.navigateByUrl('/home', HomeComponent);
    expect(home).toBeInstanceOf(HomeComponent);
  });

  it('should navigate to /about and render AboutComponent', async () => {
    const about = await harness.navigateByUrl('/about', AboutComponent);
    expect(about).toBeInstanceOf(AboutComponent);
  });

  it('should redirect "" to /home', async () => {
    const redirect = await harness.navigateByUrl('/', HomeComponent);
    expect(redirect).toBeInstanceOf(HomeComponent);
  });
});
