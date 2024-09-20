// Import images from assets
import Worst from '../../assets/worst.png';
import NotGood from '../../assets/notgood.png';
import Fine from '../../assets/fine.png';
import LookGood from '../../assets/lookgood.png';
import VeryGood from '../../assets/verygood.png';
import useFeedbackStore from '../../store/useFeedbackStore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../../utils/validationSchema';

function FeedbackForm() {
  const { formData, setFormData, addFeedback } = useFeedbackStore();
  
//set the values formData
  const handleSubmit = (values) => {
    setFormData("name", values.name);
    setFormData("contactNumber", values.contactNumber);
    setFormData("emailAddress", values.emailAddress);
    setFormData("rating", values.rating);
    setFormData("comments", values.comments);
    addFeedback();
  };


  return (
    <div className="max-w-md  mx-auto p-6 h-full bg-white rounded-lg shadow-md">
      <h2 className="text-sm text-[#2071B2] mb-4">
        Please Provide Your Feedback
      </h2>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm(); 
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#2071B2] font-bold mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-3 py-2 border-2 text-sm placeholder:text-[12px] rounded-lg shadow-md border-[#888888] focus:outline-none focus:ring-[#105955] focus:border-[#105955]"
                    placeholder="Name..."
                  />
                  <ErrorMessage name="name" component="div" className="text-red-600 text-[10px]" />
                </div>
                <div>
                  <label className="block text-sm text-[#2071B2] font-bold mb-2">Contact Number</label>
                  <Field
                    type="tel"
                    name="contactNumber"
                    className="w-full px-3 py-2 border-2 text-sm placeholder:text-[12px] rounded-lg shadow-md border-[#888888] focus:outline-none focus:ring-[#105955] focus:border-[#105955]"
                    placeholder="+91 00000 00000"
                  />
                  <ErrorMessage name="contactNumber" component="div" className="text-red-600 text-[10px]" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#2071B2] font-bold mb-2">Email Address</label>
                <Field
                  type="email"
                  name="emailAddress"
                  className="w-1/2 px-3 py-2 border-2 text-sm placeholder:text-[12px] rounded-lg shadow-md border-[#888888] focus:outline-none focus:ring-[#105955] focus:border-[#105955]"
                  placeholder="xyz123@gmail.com"
                />
                <ErrorMessage name="emailAddress" component="div" className="text-red-600 text-[10px]" />
              </div>
              <div>
                <label className="block text-sm text-[#2071B2] font-bold mb-2">Share your experience in scaling </label>
                <div className="flex justify-center space-x-3">
                  {["Worst", "Not Good", "Fine", "Look Good", "Very Good"].map((label, index) => {
                    return (
                      <div
                      key={index}
                      className="flex flex-col items-center space-y-3 px-2 "
                      style={{
                        opacity: 1,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      <img
                        src={[Worst, NotGood, Fine, LookGood, VeryGood][index]}
                        className={`w-[40px] text-center `}
                        style={{
                          filter:
                            (values.rating === 100 && index === 4) ||values.rating > 0 && index === Math.floor(values.rating / 20)
                              ? 'none' 
                              : 'grayscale(100%)', 
                        }}
                        alt={label}
                      />
                      <p
                        className={`text-[12px]  font-bold text-center`}
                        style={{
                          color:
                            (values.rating === 100 && index === 4) ||values.rating > 0 && index === Math.floor(values.rating / 20)
                              ? '#105955' 
                              : '#A5E0DD', 
                        }}
                      >
                        {label}
                      </p>
                    </div>
                    
                    
                    );
                  })}
                </div>
                <Field
                  type="range"
                  name="rating"
                  onChange={handleChange}
                  className="w-full h-2 rounded-lg appearance-none bg-[#A5E0DD] mt-4"
                  style={{
                    background: `linear-gradient(to right, #105955 ${values.rating}%, #A5E0DD ${values.rating}%)`,
                    WebkitAppearance: "none",
                  }}
                />
                <ErrorMessage name="rating" component="div" className="text-red-600 text-[10px]" />
                <style>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #105955;
                    cursor: pointer;
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #105955;
                    cursor: pointer;
                  }
                `}</style>
              </div>
              <div>
                <Field
                  as="textarea"
                  name="comments"
                  className="w-full px-3 py-2 border-2 placeholder:text-[12px] rounded-md shadow-md border-[#888888] focus:outline-none focus:ring-[#105955] focus:border-[#105955]"
                  placeholder="Add your comments..."
                />
                <ErrorMessage name="comments" component="div" className="text-red-600 text-[10px]" />
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-[#20B2AA] text-sm w-full text-white font-bold py-2 px-4 rounded"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FeedbackForm;
