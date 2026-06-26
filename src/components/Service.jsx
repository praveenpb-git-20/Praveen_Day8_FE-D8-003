function Service({ icon, title, description }) {
  return (
    <div className="card service-card">

      <div className="icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Learn More</button>

    </div>
  );
}

export default Service;