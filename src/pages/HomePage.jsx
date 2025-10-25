import { useState } from "react";
import { PinnedPosts } from "../components/pinnedPosts";
import { PostSections } from "../components/PostSections";

export const HomePage = ({ data }) => {
  const [dataCard, setDataCard] = useState(data)
  console.log(dataCard)

  return (<div className="flex gap-30">
    <PinnedPosts
      dataCard={dataCard}
      setDataCard={setDataCard}
      pinnedPosts={dataCard.pinnedPosts} />
    <PostSections
      postSections={dataCard.postSections}
      dataCard={dataCard}
      setDataCard={setDataCard} />
  </div>
  )
}
