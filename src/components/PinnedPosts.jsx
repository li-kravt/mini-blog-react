import { Post } from "./Post"

export const PinnedPosts = ({ pinnedPosts, dataCard, setDataCard }) => (
  <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-xl">
    <p className="font-bold">Pinned Posts</p>
    {pinnedPosts.map((item) =>
      <Post title={item.title}
        views={item.views}
        isSaved={item.isSaved}
        key={item.id}
        description={item.description} />)}
  </div>
)