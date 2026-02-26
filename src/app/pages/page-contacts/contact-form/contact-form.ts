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
  public isSubmitting = computed(() => this.contactStore.isSubmitting());
  public isSubmitted = computed(() => this.contactStore.isSubmitted());
  public error = computed(() => this.contactStore.error?.() ?? null);

  public contactForm: FormGroup;

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

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactStore.sendEmail(this.contactForm.value);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  public resetForm(): void {
    this.contactForm.reset();
    this.contactStore.setIsSubmitted(false);
    this.contactStore.resetError();
  }
}
