import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  description: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
