import { create } from 'zustand';

//manage feedback 
const useFeedbackStore = create((set) => ({
  formData: {
    name: '',
    contactNumber: '',
    emailAddress: '',
    rating: 0,
    comments: '',
  },

// feedbacks array store the submitted feedback-------
  feedbacks: [], 

  // function to set form data--------

  setFormData: (field, value) => set((state) => ({
    formData: { ...state.formData, [field]: value },
  })),

  // add the form data to the feedbacks list---------
  addFeedback: () => set((state) => ({
    feedbacks: [...state.feedbacks, state.formData],

    // reset form after submission
    formData: { name: '', contactNumber: '', emailAddress: '', rating: 0, comments: '' }, 
  })),
}));

export default useFeedbackStore;
