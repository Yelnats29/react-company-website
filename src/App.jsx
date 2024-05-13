import './App.css';
import StaffList from './components/Staff/Staff.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState, useEffect } from "react";



const App = () => {
  const [staff, setStaff] = useState([
    {
      name: "Stanley",
      title: "CEO",
      credential: "MBA from SuperLegit University",
      id: 1,
    },
    {
      name: "Karlon",
      title: "CFO",
      credential: "CPA from TotallyReal State",
      id: 2,
    },
    {
      name: "Chloe",
      title: "CMO",
      credential: "From that other AD about that thing",
      id: 3,
    },
    {
      name: "Joe",
      title: "Software Engineer",
      credential: "The guy with his face to the monitor",
      id: 4,
    },
  ]
  );

  const [carModels, setCarModels] = useState([
    {
      model: 'Porsche Gt3 RS',
      img: 'https://www.cnet.com/a/img/resize/ade57b3fda6bd03418cebe8bdc672c856970b020/hub/2022/08/17/a44971c0-7bc7-4564-9c5b-f91b3ff5ff83/gt3-rs-2022.jpg?auto=webp&fit=cover&height=482&width=856',
    },
    {
      model: 'NISSAN GT-R R35',
      img: 'https://hips.hearstapps.com/hmg-prod/images/2023-nissan-gt-r-101-1671034165.jpg?crop=0.735xw:0.966xh;0.0163xw,0&resize=768:*',
    },
    {
      model: 'Lamborghini Huracan',
      img: 'https://www.motortrend.com/uploads/2024/02/12-2024-Lamborghini-Huraca%CC%81n-Sterrato-front-view.jpg?fit=around%7C875:492',
    },
    {
      model: 'FERRARI 458',
      img: 'https://www.cnet.com/a/img/resize/2920b43f87268307b1f8e564c53050bdae90c77b/hub/2013/08/20/7fc1acbe-67d4-11e3-a665-14feb5ca9861/72687fer_3_1.jpg?auto=webp&fit=crop&height=675&width=1200',
    },
    {
      model: 'AUDI R8',
      img: 'https://media.ed.edmunds-media.com/audi/r8/2022/oem/2022_audi_r8_coupe_performance_fq_oem_1_1280.jpg',
    },
    {
      model: 'McLaren 720s',
      img: 'https://assets-global.website-files.com/5b4a3b3971d099f78f362505/64e0df2c72114e0befc6fd09_2018-Mclaren-720S-Coupe-Glacier-White-SBM14DCA1JW000969_013.webp',
    },
  ],
  );


  const [pastWorks, setPastWorks] = useState([
    {
      id: 1,
      project: "Divide and Conquer",
      location: "New York City",
      duration: "3 years",
      description:
        "Aquired a new line of Hybrid vehicles for launch in the new season.",
    },
    {
      id: 2,
      project: "Level Up",
      location: "Dallas",
      duration: "8 months",
      description:
        "Partnering with vendors to bring a stable supply of vehicle parts.",
    },
    {
      id: 3,
      project: "User Outreach",
      location: "California",
      duration: "6 months",
      description:
        "Engaging with the user base to establish connections and foot traffic via car shows.",
    },
  ],
  );


  const [companyHistory, setCompanyHistory] = useState(`In a world where innovation reigns supreme, Ascension emerged as a beacon of automotive evolution. Founded by a group of visionary engineers and entrepreneurs, the company's genesis stemmed from a shared belief: that transportation should transcend mere functionality, becoming an immersive experience that harmonizes with both driver and environment. With a passion for cutting-edge technology and sustainable design, Ascension's founders embarked on a journey to redefine the automotive landscape, blending elegance, performance, and eco-consciousness into every vehicle they craft. Thus, Ascension was born—a testament to the relentless pursuit of automotive excellence and a commitment to shaping the future of mobility.`)


  const [contactUs, setContactUs] = useState({
    phone: '1-800-321-1234',
    address: 'Ascension Cars North America, Up One Drive New York, NY 12345',
  })


  const [externalLinks, setExternalLinks] = useState([
    {
      name: 'Car Shows',
      url: '',
    },
    {
      name: 'Ascension Center Search',
      url: '',
    },
    {
      name: 'Genuine Accessories',
      url: '',
    },
  ]
  );


  return (
    <>
      <Navbar />
      <main className="home">
        <h1>Welcome to Ascension!</h1>
        <h2>The road ahead never seemed so clear!</h2>
        <p>Where to next?</p>
      </main>
      <section className="companyHistory">
        <h2>Company History</h2>
        {companyHistory}
      </section>

      <section className="carModels">
        <h2>Models</h2>
        <ul>
          {carModels.map((carModel, index) => {
            return (

              <li key={index}>
                {carModel.model}
                <br></br>
                <img src={carModel.img} alt={carModel.model} />
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <h2>Past Work</h2>
        <ul>
          {pastWorks.map((pastWork, index) => {
            return (

              <li key={index}>
                Project Name: <h4>{pastWork.project}</h4>
                <br></br>
                Location: {pastWork.location}
                <br></br>
                Duration: {pastWork.duration}
                <br></br>
                Description: {pastWork.description}
                <br></br>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="staff">
        <h2>Staff</h2>
        <ul>
          {staff.map((employee) => (
            <StaffList
              key={employee.id}
              employee={employee}
            />
          )
          )}
        </ul>
      </section>

      <section className="contactUs">
        <h2>Contact Us</h2>
        <ul>
          Call us at {contactUs.phone}
          <br></br>
          Send us a letter: {contactUs.address}
        </ul>
      </section>

      <section className="externalLinks"></section>
      <footer>Nexts Steps:</footer>
      {externalLinks.map((externalLink, index) => {
        return (

          <div key={index}>
            <a href={externalLink.url}>{externalLink.name}</a>
          </div>
        )
      })};
    </>
  );
};

export default App;