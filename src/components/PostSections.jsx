import { Section } from "./Section"

export const PostSections = ({ postSections, dataCard, setDataCard }) => (

  <div className="flex flex-col gap-10">
    {postSections.map((item) =>
      <Section
        title={item.title}
        key={item.id}
        sectionId={item.id}
        cards={item.cards}
        isOpen={item.isOpen}
        dataCard={dataCard}
        setDataCard={setDataCard}
      />
    )}
  </div>
)