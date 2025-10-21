import { Post } from "./Post"

export const PostSections = ({ postSections }) => (

  <div>
    <div>
      <p>Heading</p>
      <button>button</button>
    </div>
    {postSections.map((item) =>
      <Post title={item.title}
        views={item.views}
        isSaved={item.isSaved}
        id={item.id}
        description={item.description} />)}
  </div>
)