import FeedbackForm from "../components/home/FeedbackForm";
import FeedbackList from "../components/home/FeedbackList";

const Home = () => {
  return (
    <div className="flex flex-wrap lg:ml-10  md:ml-0  w-full max-w-7xl p-5 gap-8 ">
      <FeedbackForm />
      <div className=" lg:w-1/2 md:w-full lg:h-[650px]">
      <FeedbackList />
      </div>
    </div>
  );
};

export default Home;