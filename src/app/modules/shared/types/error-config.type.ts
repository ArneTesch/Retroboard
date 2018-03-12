export interface FormErrorsConfig {
  [key: string]: FormFieldErrorConfigs;
}

export interface FormFieldErrorConfigs {
  [key: string]: string;
}
