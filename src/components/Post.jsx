

export const Post = ({ title, views, isSaved, description, onSave }) => (
  <div>
    <div className="flex flex-col p-2 bg-white rounded-xl gap-2">
      <div className="w-54 h-30 bg-pink-400 rounded-xl p-2">
        <button
          className={isSaved ? "h-10 w-10 rounded-4xl bg-yellow-400" : "h-10 w-10 rounded-4xl bg-gray-500"}
          onClick={() => onSave(isSaved)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <p className="font-bold">{title}</p>
          <p>views: {views}</p>
        </div>
        <div className="flex rounded-xl bg-black"></div>
        <div className="w-full h-0.5 bg-gray-200"></div>
        <p className="w-54">{description}</p>
      </div>
    </div>
  </div>
)