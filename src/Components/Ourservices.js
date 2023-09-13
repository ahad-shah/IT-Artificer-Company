import "../Components/Ourservice.css";

const Ourservice = () => {
  const ourservicearr = [
    {
      header: "24/7 Support",
      content:
        "Our Dedicated Support Team Provide 24/7 Support through email skype and online calls 24/7 Support through email skype and online calls ",
      link: "youtube.com",
      icon: "fa-regular fa-comment",
    },
    {
      header: "web hosting and domain service",
      content:
        "the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a",
      link: "youtube.com",
      icon: "fa-solid fa-gear",
    },
    {
      header: "Web Development",
      content:
        "the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a",
      link: "youtube.com",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    {
      header: "Responsive Layout",
      content:
        "the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a",
      link: "youtube.com",
      icon: "fa-solid fa-mobile-screen",
    },
    {
      header: "Search Engine Optimization",
      content:
        "the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a",
      link: "youtube.com",
      icon: 'fa-solid fa-chart-line',
    },
    {
      header: "Professional Training",
      content:
        "the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a",
      link: "youtube.com",
      icon: 'fa-solid fa-graduation-cap',
    },
  ];

  return (
    <>
      <div className="ourservice ">
      <h2 className="text-center">Our Services</h2>
      <p className="text-center">we are creative design agency focussed on full impelementation services of all sizes</p>
        <div className="row justify-content-center" style={{ margin: "0px" }}>
          {ourservicearr.map((arr) => {
            return (
              <>
                <div className="col-lg-4 col-sm-6 col-10 px-4 mt-4 py-2 our-card">
                  <div className="d-flex justify-content-center">
                    <div className="servicebox">
                      <span className={arr.icon}></span>
                    </div>
                  </div>
                  <h5 className="mt-3 text-center">{arr.header}</h5>
                  <p>{arr.content}</p>

                  <div className="text-center">
                    <a href={arr.link} className="readmore  ">
                      Read More &gt;&gt;{" "}
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ourservice;
