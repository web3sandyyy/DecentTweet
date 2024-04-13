import cross from "../../assets/cross.svg";
import pfp from "../../assets/pfp/default.jpeg";

type PostModalProps = {
  onClose: () => void;
};

const PostModal = ({ onClose }: PostModalProps) => {
  return (
    <div
      onClick={onClose}
      className="flex justify-center  h-screen w-screen absolute top-0 left-0 bg-white bg-opacity-20"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-neutral-900 md:mt-12 mt-0  p-4 md:rounded-md rounded-none md:w-[550px] w-full h-full md:h-fit"
      >
        <button onClick={() => onClose()}>
          <img className="h-8 w-8" src={cross} alt="close" />
        </button>

        <div className="mt-4  flex h-full">
          <img className="h-10 w-10 mx-2 rounded-full" src={pfp} alt="pfp" />
          <textarea
            placeholder="What is happening"
            className=" bg-neutral-900 placeholder:text-lg placeholder:text-neutral-400 focus:outline-none w-full h-fit resize-none"
          />
        </div>

        <div className="flex justify-end w-full mt-4">
          <button className="bg-white text-black px-4 p-1 font-semibold rounded-md">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
