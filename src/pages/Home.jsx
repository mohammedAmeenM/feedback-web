import FeedbackForm from "../components/home/FeedbackForm";
import FeedbackList from "../components/home/FeedbackList";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-between p-5 ">
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default Home;

