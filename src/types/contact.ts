export interface PhoneNumber {
  label: string;
  display: string;
  href: string;
}

export interface ContactDetails {
  email: string;
  locations: string[];
  phoneNumbers: PhoneNumber[];
}
