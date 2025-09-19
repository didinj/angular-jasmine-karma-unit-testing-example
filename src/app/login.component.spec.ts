import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent (Reactive Forms)', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with email and password controls', () => {
    expect(component.loginForm.contains('email')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
  });

  it('should make email control required', () => {
    const control = component.loginForm.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalse();
  });

  it('should validate email format', () => {
    const control = component.loginForm.get('email');
    control?.setValue('invalid-email');
    expect(control?.valid).toBeFalse();
    control?.setValue('test@example.com');
    expect(control?.valid).toBeTrue();
  });

  it('should disable login button when form is invalid', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();

    component.loginForm.setValue({ email: 'test@example.com', password: '12345' });
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });
});
