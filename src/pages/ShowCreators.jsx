import Card from "../components/Card";

function ShowCreators({ creators }) {
  return (
    <div>
      <h1>Creatorverse</h1>

      {creators.length === 0 ? (
        <p>No content creators yet.</p>
      ) : (
        creators.map((creator) => (
          <Card
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
          />
        ))
      )}
    </div>
  );
}
export default ShowCreators;





{/* <Card
        name="CodingJesus"
        url="https://www.youtube.com/@CodingJesus"
        description="In-depth videos about the current CS world and the fintech industry"
        imageURL="https://yt3.googleusercontent.com/4Kz7VLoq-ItSoPvF500y11EmXmDTZ1Wq-1nnwynp4keciZyN_FgdZHcFqy6-tuox2XDLXyoWgA=s900-c-k-c0x00ffffff-no-rj"
      />
      <Card
        name="T. Folse Nuclear"
        url="https://www.youtube.com/@tfolsenuclear"
        description="Reaction videos and shorts about nuclear power, physics, and space"
        imageURL="https://yt3.googleusercontent.com/ccoiX9pDeb6tbtt8T8P5MA0wmMabVgWZiPUvF4aS0-V65PhXCGO1XBFgKxqYiX_Xhzyyq4Qs7A=s900-c-k-c0x00ffffff-no-rj"
      />
      <Card
        name="Killdozer_tv"
        url="https://www.youtube.com/@Killdozer_tv"
        description="Comedic videos and shorts/tiktoks related to food and dieting"
        imageURL="https://yt3.googleusercontent.com/WyyMDdjEUinUZJEUbgVUaqyOMVKn66Ye1lmT6990mr-RhK6oMEHPmOknYZdzz8FBFctrh1K2ww=s900-c-k-c0x00ffffff-no-rj"
      />
      <Card
        name="James Kibs"
        url="https://www.tiktok.com/@jameskibs__"
        description="Comedic shorts/tiktoks eating and reviewing food"
        imageURL="https://images.squarespace-cdn.com/content/v1/6811a208f10260751ba7bfc5/e94a6076-238a-4727-ae34-016165461ead/James+Kibitel+-+Headshot.jpg"
      />
      <Card
        name="The PrimeTime"
        url="https://www.youtube.com/@ThePrimeTimeagen"
        description="Videos about programming, software engineering, Linux, and cybersecurity"
        imageURL="https://yt3.googleusercontent.com/ytc/AIdro_laY82JAzs_2edBDxrxLgLWshhMK04SpAqOfoEzexOBZg=s900-c-k-c0x00ffffff-no-rj"
      />
    </div> */}