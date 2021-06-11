import logo from './4sTek.png';
import { Container, Col, Row } from "react-bootstrap";
import './App.css';

function MiddleContent() {
  return (
    <Container style={{
      width: 1500, maxWidth:'100%'
    }}>
      <Row>
      <Col><div class="shadow p-3 mb-5 bg-white rounded">
        <b>Our Inspiration</b>
        <p style={{textAlign: 'left', minHeight: 140}}>
        Architectural flaws and avoidable vendor lock-ins have huge and often lifetime costs.  
        Avoiding these requires large-enterprise level rigor when it comes to standing up foundational architectures. 
        There is a need for vendor-agnostic enterprise architects - especially for medium-sized enterprises.

        
        </p></div>

        </Col>
        
                
        <Col>
        <div class="shadow p-3 mb-5 bg-white rounded">
        <b>You are our typical client if you</b>
        <p style={{textAlign: 'left', minHeight: 140}}>
        &#183; are IT or architecture leader at a medium-sized enterprise or a large enterprise who is not in the IT business.
        <br></br>&#183; you were referred to us by another client. 
        <br></br>&#183; you read some of this page and want to see if we can be of help
        {/* <br></br>please do <a href="mailto:info@4sTek.com?Subject=">reach out to us</a>. */}
         

        
        </p>
        </div>
        </Col>
        
        <Col>
        <div class="shadow p-3 mb-5 bg-white rounded">
        <b>Bring us in when you</b>
        <p style={{textAlign: 'left', minHeight: 140}}>

        &#183; are about to kick off a major enterprise IT project  
            <br></br>&#183; want someone to validate enterprise architecture plans
            <br></br>&#183; are making major technology decisions and want a second opinion on costs 
            <br></br>&#183; want help evaluating competing technology options

{/*           <ul>
            <li> are about to kick off a major enterprise IT project  </li>
            <li> want someone to validate enterprise architecture plans</li>
            <li> are making major technology decisions and want a second opinion on costs </li>
            <li> want help evaluating competing technology options</li>
          </ul> */}
         

        
        </p>
        </div>
        </Col>


      </Row>
      <Row>
      <Col><div class="shadow p-3 mb-5 bg-white rounded">
        <p style={{textAlign: 'left', minHeight: 150}}>
        <b>Our Spiel</b><p></p>We love modern trends in IT, we really do! And work hard to stay on top of them: Cloud-native development, SaaS, extensive use of open source, REST APIs, MDM, Datalakes... you name it! 
        For the businesses, they provide rapid low-cost startup allowing them to avoid setting up infrastructure of their own. 
        For developers, these technologies provide "lego build" like rapid prototyping and development capabilities.
        However it requires the technology personnel to be "jack of all trades" - Developers to be "full stack", "DeveOps conversant" and "Architecturally savvy".
        For Architects, even more so - not only be conversant, but have hands-on, real life experience in at least some of major parts that make up the enterprise architecture.
        This leaves a gap between the breadth of experience needed of an architect to device effective solutions and the breadth of in-house architects.
        For medium sized companies, hiring enterprise architects of this calibre is too expensive or frankly not needed on a full time basis. That is where we come in.
        <p></p>  
        We have seen time and again, how costs of fixing architectural flaws (we admit, we made some ourselves) grow exponentially as the project progresses. 
        Moreover, architectural short-cuts/vendor provided reference architectures result in vendor lock-ins that "keeps on giving" by increasing both build and operating costs.
        It makes sense to have us come in and provide an external pair of (very experienced and possibly bespectacled) eyes to provide high level design or review it before too many costs are sunk in.
        <p></p>
        <b>Large Expectations - Medium Budgets</b><p></p>
        Medium sized enterprises' expectations on their IT departments are almost the same as their large enterprise counterparts, with not so matching budgets. 
        They are expected to come up with and maintain architectures that are equally: 
        <p></p>
        <ul>
        <li>compliant with localized LRRs, relevant industry standards and best practices, </li>
        <li>secure and ransomware resistant, </li>
        <li>vendor agnostic (cloud and software vendors), </li>
        <li>expandable (e.g. ability to add new product lines/processes)</li>
        <li>strategically nimble (allow for build-over-time) </li>
        <li>scalable (horizontally scale by adding resources without requiring re-builds)</li>
        </ul>
         Good news is, modern architectures, especially public and hybrid cloud paradigms and related technologies, put all of these capabilities within the reach of medium sized enterprises.  
         Having a solid architectural foundation is critical for achieving these goals.
         Bringing in enterprise architects with right skill sets and experience at the right time ensures such an architectural foundation.
         <p></p>
         4sTek can provide large enterprise calibre architects. 
         We have very stringent hiring standards - we won't send someone to a client that we won't hire ourselves on large enterprise initiatives.
         As you can see from our home page, we believe in simplicity and not in aggressive marketing. Almost all of our current business is through referrals.
         If you happen to bump into this page on the internet, and want to check us out, please do <a  href="mailto:info@4sTek.com?Subject=Bumped into your website">contact us</a>.
        </p> </div></Col>
          </Row>
    </Container>
  );
}

export default MiddleContent;
