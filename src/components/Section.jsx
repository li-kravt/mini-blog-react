import { Post } from "./Post"

export const Section = ({ title, isOpen, cards }) => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4">
      <p className="font-bold">{title}</p>
      <button
        className="w-40 h-10 justify-center items-center cursor-pointer border-1 border-gray-400 rounded-xl">
        {isOpen ? "Close" : "Open"}
      </button>
    </div>
    <div className="flex flex-wrap w-fit gap-4 p-4 rounded-xl">
      {cards.map(item =>
        <Post title={item.title}
          views={item.views}
          description={item.description}
          isSaved={item.isSaved} />
      )}
    </div>
  </div>
)