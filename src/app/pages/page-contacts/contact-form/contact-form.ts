import { Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgArobaseComponent } from 'src/app/shared/svgs/ui/svg-arobase/svg-arobase.component';
import { SvgEmailComponent } from 'src/app/shared/svgs/ui/svg-email/svg-email.component';
import { SvgInfoComponent } from 'src/app/shared/svgs/ui/svg-info/svg-info.component';
import { SvgPersonComponent } from 'src/app/shared/svgs/ui/svg-person/svg-person.component';
import { ContactStore } from 'src/app/store/contact.store';
import { UiStore } from 'src/app/store/ui.store';

const svgs = [
  SvgArobaseComponent,
  SvgEmailComponent,
  SvgInfoComponent,
  SvgPersonComponent
];

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss'],
  imports: [...svgs, ReactiveFormsModule],
  standalone: true
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  readonly uiStore = inject(UiStore);
  readonly contactStore = inject(ContactStore);

  public uiText = computed(() => this.uiStore.getUiTxt().contactTxt);
  public contactInfos = this.contactStore.getContactTxt;

  public contactForm: FormGroup;
  public isSubmitting = false;
  public isSubmitted = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  public isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  public getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return this.uiText()?.requiredFieldError || 'This field is required.';
      if (field.errors['email']) return this.uiText()?.emailInvalidError || 'Invalid email address.';
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return this.uiText()?.minLengthError?.replace('{min}', requiredLength) || `Minimum ${requiredLength} caractères requis`;
      }
    }
    return '';
  }

  public async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate form submission
      try {
        await this.simulateFormSubmission();
        this.isSubmitted = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  private simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        resolve();
      }, 2000);
    });
  }

  public resetForm(): void {
    this.contactForm.reset();
    this.isSubmitted = false;
  }
}
