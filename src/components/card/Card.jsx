import "./card.css";

export const Card = ({ user }) => {
  const { name, seniority, hourlyRate, avatar, title, tags } = user;
  return (
    <div className="card">
      {/* TODO: repalce hard coded avatar with user's avatar */}
      <img src={avatar} alt="Avatar" />
      <div className="container">
        {/* TODO: replace user name with the actual user name */}
        <h4>User Name</h4>
        {name}
        {/* TODO: replace user job with the user's title */}
        <p>{title}</p>
        {/* TODO: replace SENIORITY with user's seniority */}
        <p>Seniority level: {seniority}</p>
        {/* TODO: replace RATE with user's hourlyRate */}
        <p>Hourly rate: {hourlyRate}</p>
        <p>Languages{[tags].join(",")}:</p>
        {/* TODO: iterate over tags to show all of them */}
        {/* TODO: each tag should have a tag class */}
        <footer>
          <button className="primary-button">Book Now</button>
          <button className="secondary-button">Full profile</button>
        </footer>
      </div>
    </div>
  );
};
