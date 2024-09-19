import db from "../utils/db";
const AboutPage = async () => {
  const users = await db.testProfile.findMany();

  return (
    <div>
      {users.map((item, index) => {
        return (
          <h2 key={item.id} className="text-2xl font-bold">
            {item.name} : {index + 1}
          </h2>
        );
      })}
    </div>
  );
};

export default AboutPage;
