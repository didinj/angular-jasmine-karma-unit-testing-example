import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<p appHighlight="lightblue">Hover me!</p>`,
  standalone: true,
  imports: [HighlightDirective]
})
class TestHostComponent { }

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should highlight background on mouse enter', () => {
    const pEl = fixture.debugElement.query(By.css('p'));
    pEl.triggerEventHandler('mouseenter');
    fixture.detectChanges();
    expect(pEl.nativeElement.style.backgroundColor).toBe('lightblue');
  });

  it('should remove highlight on mouse leave', () => {
    const pEl = fixture.debugElement.query(By.css('p'));
    pEl.triggerEventHandler('mouseleave');
    fixture.detectChanges();
    expect(pEl.nativeElement.style.backgroundColor).toBe('');
  });
});
