import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginSuccessDialogComponent } from '../login-success-dialog/login-success-dialog.component';
import { RegistrationSucessDialogComponent } from '../registration-sucess-dialog/registration-sucess-dialog.component';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<LoginComponent>) { }
  posts: any[] = [];
  selectedLanguage: string = 'English';
  isRegistrationOpen = false;
  registrationForm: NgForm | undefined;
  loginFormData = {
    email: '',
    password: '',
  };
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  registerFormData = {
    fullName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    language: 'en'
  };
  errorMessages = {
    fullName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    general: ''
  };

  clearError(field: keyof typeof this.errorMessages): void {
    this.errorMessages[field] = ''; // Clears the error message when user starts typing
  }

  passwordMatch = true;
  loginResponse: any = null;
  errorMessage: string | null = null;
  errorMessage1: string | null = null;
  errorMessage2: string | null = null;

  onEmailChangeLogin(event: string): void {
    this.loginFormData.email = event;
    this.errorMessage = null; // Clear the error message on email change
  }

  onPasswordChangeLogin(event: string): void {
    this.loginFormData.password = event;
    this.errorMessage = null; // Clear the error message on password change
  }

  closeDialog(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }
  }
  

  toggleRegistration() {
    this.isRegistrationOpen = !this.isRegistrationOpen;
  }
  

  async onSubmit(): Promise<void> {
    const requestBody = {
      email: this.loginFormData.email,
      password: this.loginFormData.password,
    };
  
    console.log("Sending Login Data:", requestBody);
  
    try {
      const response = await fetch('http://localhost/login-granny.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Login Response:", responseData);
  
      if (responseData.status) {
        this.dialog.open(LoginSuccessDialogComponent, {});
      } else {
        this.errorMessage1 = responseData.message || 'Invalid login credentials';
      }
    } catch (error) {
      console.error("Error during login:", error);
      this.errorMessage2 = 'Network error. Please check your connection and try again.';
    }
  }
  
  
  getLanguageName(languageId: number): string {
    const languageMapping: { [key: number]: string } = {
      1: 'English',
      2: 'German',
      3: 'French'
    };
    return languageMapping[languageId] || 'English';
  }
  
  

  // Input event handlers
  onFullNameChange(event: string): void {
    this.registerFormData.fullName = event;
  }

  onGenderChange(selectedGender: string): void {
    this.registerFormData.gender = selectedGender;
  }

  onEmailChange(event: string): void {
    this.registerFormData.email = event;
  }

  // Password Match Checking and Form Validation
  onPasswordChange(event: string): void {
    this.registerFormData.password = event;
    this.updatePasswordMatch();
  }

  disableCopyPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }

  onConfirmPasswordChange(confirmPassword: string): void {
    this.registerFormData.confirmPassword = confirmPassword;
    this.updatePasswordMatch();
  }

  // Function to check if passwords match
  private updatePasswordMatch(): void {
    this.passwordMatch = this.registerFormData.password === this.registerFormData.confirmPassword;
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  // Registration Handler
  onRegisterBtn(): void {
    this.errorMessages.general = ''; // Reset error messages
  
    let isValid = true;
  
    if (!this.registerFormData.fullName) {
      this.errorMessages.fullName = 'Full Name is required.';
      isValid = false;
    }
    if (!this.registerFormData.gender) {
      this.errorMessages.gender = 'Gender is required.';
      isValid = false;
    }
    if (!this.registerFormData.email) {
      this.errorMessages.email = 'Email is required.';
      isValid = false;
    } else if (!this.validateEmail(this.registerFormData.email)) {
      this.errorMessages.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!this.registerFormData.password) {
      this.errorMessages.password = 'Password is required.';
      isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(this.registerFormData.password)) {
      this.errorMessages.password = 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character.';
      isValid = false;
    }
    if (!this.registerFormData.confirmPassword) {
      this.errorMessages.confirmPassword = 'Confirm Password is required.';
      isValid = false;
    } else if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      this.errorMessages.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }
  
    if (isValid) {
      this.submitRegistration();
    }
  }
  
  async submitRegistration(): Promise<void> {
    try {
      const registerData = {
        full_name: this.registerFormData.fullName,
        gender: this.registerFormData.gender,
        email: this.registerFormData.email,
        password: this.registerFormData.password,
        confirm_password: this.registerFormData.confirmPassword,
        language: this.getLanguageId(this.selectedLanguage) // ✅ Now this correctly converts name to ID
      };
  
      const response = await fetch('http://localhost/registration-granny.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        this.dialog.open(RegistrationSucessDialogComponent, { data: { message: data.success } });
      } else {
        this.errorMessages.general = data.error || 'An error occurred during registration.';
      }
    } catch (error) {
      console.error('Error during registration:', error);
      this.errorMessages.general = 'Network error. Please try again.';
    }
  }
  

  getLanguageId(language: string): number {
    const languageMapping: { [key: string]: number } = {
      'English': 1,
      'German': 2,
      'French': 3
    };
    return languageMapping[language] || 1; // Default to English (1)
  }
  
  translateText(lang: string): void {
    const languageMapping: { [key: string]: string } = {
      'en': 'English',
      'de': 'German',
      'fr': 'French'
    };
  
    // Set the selected language name based on lang code
    this.selectedLanguage = languageMapping[lang] || 'English';
    
    console.log('Selected Language:', this.selectedLanguage);
  }


}
