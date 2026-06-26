function Team({ image, name, role }) {
  return (
    <div className="card team-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{role}</p>

      <button>View Profile</button>

    </div>
  );
}

export default Team;