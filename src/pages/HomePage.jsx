import { PinnedPosts } from "../components/pinnedPosts";
import { PostSections } from "../components/PostSections";

export const HomePage = ({ data }) => (

  <div className="flex gap-30">
    <PinnedPosts pinnedPosts={data.pinnedPosts} />
    <PostSections postSections={data.postSections} />
  </div>
)
