import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter]
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should start with count = 0', () => {
    expect(component.count).toBe(0);
  });

  it('should increment the count when increment() is called', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement the count when decrement() is called', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  it('should render the count in the template', () => {
    component.count = 5;
    fixture.detectChanges(); // update the template
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('5');
  });

  it('should increment the count when Increment button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const incrementButton = compiled.querySelector('button:first-of-type') as HTMLButtonElement;
    incrementButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('1');
  });

  it('should decrement the count when Decrement button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const decrementButton = compiled.querySelector('button:last-of-type') as HTMLButtonElement;
    decrementButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain('-1');
  });
});
