import Card from "../components/Card";

function ShowCreators() {
  return (
    <div>
      <h1>All Creators</h1>

      <Card
        name="CodingJesus"
        url="https://www.youtube.com/@CodingJesus"
        description="In-depth videos about the current CS world and the fintech industry"
        imageURL=""
      />
      <Card
        name="T. Folse Nuclear"
        url="https://www.youtube.com/@tfolsenuclear"
        description="Reaction videos and shorts about nuclear power, physics, and space"
        imageURL=""
      />
      <Card
        name="Killdozer_tv"
        url="https://www.youtube.com/@Killdozer_tv"
        description="Comedic videos and shorts/tiktoks related to food and dieting"
        imageURL=""
      />
      <Card
        name="James Kibs"
        url="https://www.tiktok.com/@jameskibs__"
        description="Comedic shorts/tiktoks eating and reviewing food"
        imageURL=""
      />
      <Card
        name="The PrimeTime"
        url="https://www.youtube.com/@ThePrimeTimeagen"
        description="Videos about programming, software engineering, Linux, and cybersecurity"
        imageURL=""
      />
    </div>
  );
}

export default ShowCreators;