import { Section } from "./Section"

export const PostSections = ({ postSections }) => (

  <div className="flex flex-col gap-10">
    {postSections.map((item) =>
      <Section
        title={item.title}
        id={item.id}
        cards={item.cards}
        isOpen={item.isOpen} />)}
  </div>
)