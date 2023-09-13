
import myimage from './images/Writing an Effective Email.webp';
import './about.css'


const About = () => {
  return (
    <>
      <div className="about">

      <img src={myimage} alt="" />
        <h3 className='abheading ps-2'>About Us</h3>
        <p className="abcontent">
          ITA software development, testing, user interface design and IT
          consultant Firm serving since 2011 at Peshawar Pakistan. We also
          provide standard web based solutions for any kind of businesses and
          educational institutes. We have team of professional programmers,
          designers, and marketing experts. IT Artificer gain our clients
          confidence and form long term corporate relation with our clients. We
          also focus on the clients requirements in order to come up with the
          Perfect Solution for their businesses. ITA also provide professional
          training to new graduates under professional and experienced
          developers. We also do search engine optimization to improve rank of
          site websites and produce more business and user hits.
        </p>
        <h4  className='absecondhead ps-2'>
          Our team is always ready to take new challenges and discover beyond
          the box.
        </h4>
        We offers product with unique and extra features like Attractive design,
        secured, easy to operate, more Dynamic, scaleble, search engine
        optimized etc. ITA expects to catch the interest of international
        customers along with local. The company plans to build a strong market
        position in IT Industry. IT Artificer aims to offer its products at a
        competitive price to rapidly capture the market. IT Artificer offer
        special training of web development to new graduates of this area, to
        polish their skills and make them able to enter IT development world
        easily. We are customer focus software house in Pakistan delivering high
        quality add software solutions within a short time frame. IT Artificer
        has a long list of successfully delivered software solutions for several
        clients in diversified business domains. We aligns our self with modern
        and advanced concepts in IT industry to help its customers businessmen
        and entrepreneurs by providing value added software. We performs
        through research on each given problem and advises its customers on how
        their business growth aims can be achieve by the implementation of a
        specific and research-base software solution.
      </div>
    </>
  );
};

export default About;
