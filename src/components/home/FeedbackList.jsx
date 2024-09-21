import Worst from '../../assets/worst.png';
import NotGood from '../../assets/notgood.png';
import Fine from '../../assets/fine.png';
import LookGood from '../../assets/lookgood.png';
import VeryGood from '../../assets/verygood.png';
import useFeedbackStore from '../../store/useFeedbackStore';

function FeedbackList() {
  const { feedbacks } = useFeedbackStore();

  // set the rating in image and label-------
  const getFeedbackRatingInfo = (rating) => {
    if (rating >= 0 && rating <= 20) {
      return { label: 'Worst', image: Worst };
    } else if (rating >= 21 && rating <= 40) {
      return { label: 'Not Good', image: NotGood };
    } else if (rating >= 41 && rating <= 60) {
      return { label: 'Fine', image: Fine };
    } else if (rating >= 61 && rating <= 80) {
      return { label: 'Look Good', image: LookGood };
    } else if (rating >= 81 && rating <= 100) {
      return { label: 'Very Good', image: VeryGood };
    }
    return { label: '', image: null };
  };

  return (
    <div className="w-full  h-[590px]    p-4 rounded-xl  ">
      <h2 className="text-xl text-[#2071B2]  font-bold mb-4">Submitted Feedbacks</h2>
      <div className="space-y-4 overflow-auto h-full no-scrollbar ">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => {
            const { label, image } = getFeedbackRatingInfo(feedback.rating);
            return (
              <div key={index} className="border w-full p-4 rounded-lg bg-white shadow-md  ">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <p className="text-[#2071B2] font-bold text-sm mb-1">{feedback.comments}</p>
                    <p className="text-[#2071B2] text-sm">{feedback.name}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src={image} alt={label} className="w-10 h-10 object-contain" />
                    <span className="text-green-500 font-bold text-[12px] mt-1">{label}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No feedback submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default FeedbackList;


