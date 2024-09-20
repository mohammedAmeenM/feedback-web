
import * as Yup from 'yup';

//validation feedback form---------
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  contactNumber: Yup.string()
  .matches(/^\+?[0-9]+$/, 'Contact number must be a valid number and can start with +')
  .required('Contact number is required'),
  emailAddress: Yup.string().email('Invalid email').required('Email is required'),
  rating: Yup.number().min(1, 'Rating is required').required('Rating is required'),
  comments: Yup.string().required('Comments is required'),
});

export default validationSchema;
