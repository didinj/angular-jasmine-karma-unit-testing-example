import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

describe('SignupComponent (Template-Driven Forms)', () => {
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, SignupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
  });

  it('should disable the button when form is invalid and enable when valid', async () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const usernameInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="username"]');
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="email"]');

    // wait for the form to initialize
    await fixture.whenStable();
    fixture.detectChanges();

    // now Angular has attached NgForm, should be invalid initially
    expect(button.disabled).toBeTrue();

    // Fill inputs with valid data
    usernameInput.value = 'JohnDoe';
    usernameInput.dispatchEvent(new Event('input'));
    emailInput.value = 'john@example.com';
    emailInput.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    fixture.detectChanges();

    expect(button.disabled).toBeFalse();
  });
});
