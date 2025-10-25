import { Post } from "./Post"
import { PostSections } from "./PostSections"
import { useState } from 'react'

export const Section = ({ title, sectionId, cards, dataCard, setDataCard }) => {
  const [isOpened, setIsOpened] = useState(true)

  const handleSave = (postId) => {
    const section = dataCard.postSections.find((item) => item.id === sectionId)
    const post = section.cards.find((item) => item.id === postId)

    setDataCard(prev => ({
      ...prev,
      pinnedPosts: [post, ...prev.pinnedPosts],
      postSections: prev.postSections.map(section => section.id === sectionId ? {
        ...section,
        cards: section.cards.filter(post => post.id !== postId)
      } : section)
    }))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <p className="font-bold">{title}</p>
        <button
          className="w-40 h-10 justify-center items-center cursor-pointer border-1 border-gray-400 rounded-xl"
          onClick={() => setIsOpened(prev => !prev)}>
          {isOpened ? "Close" : "Open"}
        </button>
      </div>
      {isOpened && (
        <div className="flex flex-wrap w-fit gap-4 p-4 rounded-xl">
          {cards.map(item =>
            <Post
              title={item.title}
              views={item.views}
              description={item.description}
              isSaved={item.isSaved}
              postId={item.id}
              key={item.id}
              onSave={() => handleSave(item.id)}
            />
          )}
        </div>
      )}
    </div>
  )
}