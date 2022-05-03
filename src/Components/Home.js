import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,Container, Button, Col, Row } from 'react-bootstrap';
import './Home.css';
import { FaCcMastercard, FaApplePay, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiNike } from 'react-icons/si';
import { IoIosAirplane } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import Airplane from './Images/Airplane.svg';
import Airplane2 from './Images/airplane white.svg';
import Location from './Images/location.svg';
import Avater from './Images/person.svg';
import Calender from './Images/calender.png'
import Photo1 from './Images/Frame 42.png'
import Photo2 from './Images/Frame 43.png'
import Photo3 from './Images/Frame 44.png'
import Picture1 from './Images/picture 1.png'
import Picture2 from './Images/picture 2.png'
import Picture3 from './Images/picture 3.png'
import Picture4 from './Images/picture 4.png'
import Picture5 from './Images/Picture 5.png'
export const Home = () => {
  
  return (
    <div>
<header className='hero-bg'>
<Navbar expand="lg">
  <Container className='nav-el'>
    <Navbar.Brand href="#home" className='text-light fw-bold fs-5 lh-base'>
    <img src= {Airplane} height ="20" width="40" alt='Logo' className='logo' />  Rodax Tours</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light'/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#" className='text-light'>About Us</Nav.Link>
        <Nav.Link href="#" className='text-light'>Support</Nav.Link>
        <Nav.Link href="#" className='text-light'>Language</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Button className='text-primary bg-white px-4' href=' https://bitbook.net/?refId=sB2c54Gk2'>Sign In</Button>
  </Container>
</Navbar>
<div className='header-el'>
  <h1>Plan The Perfect Winter Trip</h1>
  <p>Easily plan your ideal ski trip from home with the help of professionals</p>
  <Button>Book Here</Button>
</div>
</header>
<div className='section-el'>
<div className='row'>
  <div className='col'>
    <span id="span-el"><img src= {Location} height ="15" width="15" alt='Location' />  LOCATION</span>
    <form>
  <select name="location" id="form-el">
  <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
   <option value="Brunei">Brunei</option>
   <option value="Bulgaria">Bulgaria</option>
   <option value="Burkina Faso">Burkina Faso</option>
   <option value="Burundi">Burundi</option>
   <option value="Cambodia">Cambodia</option>
   <option value="Cameroon">Cameroon</option>
   <option value="Canada">Canada</option>
   <option value="Canary Islands">Canary Islands</option>
   <option value="Cape Verde">Cape Verde</option>
   <option value="Cayman Islands">Cayman Islands</option>
   <option value="Central African Republic">Central African Republic</option>
   <option value="Chad">Chad</option>
   <option value="Channel Islands">Channel Islands</option>
   <option value="Chile">Chile</option>
   <option value="China">China</option>
   <option value="Christmas Island">Christmas Island</option>
   <option value="Cocos Island">Cocos Island</option>
   <option value="Colombia">Colombia</option>
   <option value="Comoros">Comoros</option>
   <option value="Congo">Congo</option>
   <option value="Cook Islands">Cook Islands</option>
   <option value="Costa Rica">Costa Rica</option>
   <option value="Cote DIvoire">Cote DIvoire</option>
   <option value="Croatia">Croatia</option>
   <option value="Cuba">Cuba</option>
   <option value="Curaco">Curacao</option>
   <option value="Cyprus">Cyprus</option>
   <option value="Czech Republic">Czech Republic</option>
   <option value="Denmark">Denmark</option>
   <option value="Djibouti">Djibouti</option>
   <option value="Dominica">Dominica</option>
   <option value="Dominican Republic">Dominican Republic</option>
   <option value="East Timor">East Timor</option>
   <option value="Ecuador">Ecuador</option>
   <option value="Egypt">Egypt</option>
   <option value="El Salvador">El Salvador</option>
   <option value="Equatorial Guinea">Equatorial Guinea</option>
   <option value="Eritrea">Eritrea</option>
   <option value="Estonia">Estonia</option>
   <option value="Ethiopia">Ethiopia</option>
   <option value="Falkland Islands">Falkland Islands</option>
   <option value="Faroe Islands">Faroe Islands</option>
   <option value="Fiji">Fiji</option>
   <option value="Finland">Finland</option>
   <option value="France">France</option>
   <option value="French Guiana">French Guiana</option>
   <option value="French Polynesia">French Polynesia</option>
   <option value="French Southern Ter">French Southern Ter</option>
   <option value="Gabon">Gabon</option>
   <option value="Gambia">Gambia</option>
   <option value="Georgia">Georgia</option>
   <option value="Germany">Germany</option>
   <option value="Ghana">Ghana</option>
   <option value="Gibraltar">Gibraltar</option>
   <option value="Great Britain">Great Britain</option>
   <option value="Greece">Greece</option>
   <option value="Greenland">Greenland</option>
   <option value="Grenada">Grenada</option>
   <option value="Guadeloupe">Guadeloupe</option>
   <option value="Guam">Guam</option>
   <option value="Guatemala">Guatemala</option>
   <option value="Guinea">Guinea</option>
   <option value="Guyana">Guyana</option>
   <option value="Haiti">Haiti</option>
   <option value="Hawaii">Hawaii</option>
   <option value="Honduras">Honduras</option>
   <option value="Hong Kong">Hong Kong</option>
   <option value="Hungary">Hungary</option>
   <option value="Iceland">Iceland</option>
   <option value="Indonesia">Indonesia</option>
   <option value="India">India</option>
   <option value="Iran">Iran</option>
   <option value="Iraq">Iraq</option>
   <option value="Ireland">Ireland</option>
   <option value="Isle of Man">Isle of Man</option>
   <option value="Israel">Israel</option>
   <option value="Italy">Italy</option>
   <option value="Jamaica">Jamaica</option>
   <option value="Japan">Japan</option>
   <option value="Jordan">Jordan</option>
   <option value="Kazakhstan">Kazakhstan</option>
   <option value="Kenya">Kenya</option>
   <option value="Kiribati">Kiribati</option>
   <option value="Korea North">Korea North</option>
   <option value="Korea Sout">Korea South</option>
   <option value="Kuwait">Kuwait</option>
   <option value="Kyrgyzstan">Kyrgyzstan</option>
   <option value="Laos">Laos</option>
   <option value="Latvia">Latvia</option>
   <option value="Lebanon">Lebanon</option>
   <option value="Lesotho">Lesotho</option>
   <option value="Liberia">Liberia</option>
   <option value="Libya">Libya</option>
   <option value="Liechtenstein">Liechtenstein</option>
   <option value="Lithuania">Lithuania</option>
   <option value="Luxembourg">Luxembourg</option>
   <option value="Macau">Macau</option>
   <option value="Macedonia">Macedonia</option>
   <option value="Madagascar">Madagascar</option>
   <option value="Malaysia">Malaysia</option>
   <option value="Malawi">Malawi</option>
   <option value="Maldives">Maldives</option>
   <option value="Mali">Mali</option>
   <option value="Malta">Malta</option>
   <option value="Marshall Islands">Marshall Islands</option>
   <option value="Martinique">Martinique</option>
   <option value="Mauritania">Mauritania</option>
   <option value="Mauritius">Mauritius</option>
   <option value="Mayotte">Mayotte</option>
   <option value="Mexico">Mexico</option>
   <option value="Midway Islands">Midway Islands</option>
   <option value="Moldova">Moldova</option>
   <option value="Monaco">Monaco</option>
   <option value="Mongolia">Mongolia</option>
   <option value="Montserrat">Montserrat</option>
   <option value="Morocco">Morocco</option>
   <option value="Mozambique">Mozambique</option>
   <option value="Myanmar">Myanmar</option>
   <option value="Nambia">Nambia</option>
   <option value="Nauru">Nauru</option>
   <option value="Nepal">Nepal</option>
   <option value="Netherland Antilles">Netherland Antilles</option>
   <option value="Netherlands">Netherlands (Holland, Europe)</option>
   <option value="Nevis">Nevis</option>
   <option value="New Caledonia">New Caledonia</option>
   <option value="New Zealand">New Zealand</option>
   <option value="Nicaragua">Nicaragua</option>
   <option value="Niger">Niger</option>
   <option value="Nigeria">Nigeria</option>
   <option value="Niue">Niue</option>
   <option value="Norfolk Island">Norfolk Island</option>
   <option value="Norway">Norway</option>
   <option value="Oman">Oman</option>
   <option value="Pakistan">Pakistan</option>
   <option value="Palau Island">Palau Island</option>
   <option value="Palestine">Palestine</option>
   <option value="Panama">Panama</option>
   <option value="Papua New Guinea">Papua New Guinea</option>
   <option value="Paraguay">Paraguay</option>
   <option value="Peru">Peru</option>
   <option value="Phillipines">Philippines</option>
   <option value="Pitcairn Island">Pitcairn Island</option>
   <option value="Poland">Poland</option>
   <option value="Portugal">Portugal</option>
   <option value="Puerto Rico">Puerto Rico</option>
   <option value="Qatar">Qatar</option>
   <option value="Republic of Montenegro">Republic of Montenegro</option>
   <option value="Republic of Serbia">Republic of Serbia</option>
   <option value="Reunion">Reunion</option>
   <option value="Romania">Romania</option>
   <option value="Russia">Russia</option>
   <option value="Rwanda">Rwanda</option>
   <option value="St Barthelemy">St Barthelemy</option>
   <option value="St Eustatius">St Eustatius</option>
   <option value="St Helena">St Helena</option>
   <option value="St Kitts-Nevis">St Kitts-Nevis</option>
   <option value="St Lucia">St Lucia</option>
   <option value="St Maarten">St Maarten</option>
   <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
   <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
   <option value="Saipan">Saipan</option>
   <option value="Samoa">Samoa</option>
   <option value="Samoa American">Samoa American</option>
   <option value="San Marino">San Marino</option>
   <option value="Sao Tome & Principe">Sao Tome & Principe</option>
   <option value="Saudi Arabia">Saudi Arabia</option>
   <option value="Senegal">Senegal</option>
   <option value="Seychelles">Seychelles</option>
   <option value="Sierra Leone">Sierra Leone</option>
   <option value="Singapore">Singapore</option>
   <option value="Slovakia">Slovakia</option>
   <option value="Slovenia">Slovenia</option>
   <option value="Solomon Islands">Solomon Islands</option>
   <option value="Somalia">Somalia</option>
   <option value="South Africa">South Africa</option>
   <option value="Spain">Spain</option>
   <option value="Sri Lanka">Sri Lanka</option>
   <option value="Sudan">Sudan</option>
   <option value="Suriname">Suriname</option>
   <option value="Swaziland">Swaziland</option>
   <option value="Sweden">Sweden</option>
   <option value="Switzerland">Switzerland</option>
   <option value="Syria">Syria</option>
   <option value="Tahiti">Tahiti</option>
   <option value="Taiwan">Taiwan</option>
   <option value="Tajikistan">Tajikistan</option>
   <option value="Tanzania">Tanzania</option>
   <option value="Thailand">Thailand</option>
   <option value="Togo">Togo</option>
   <option value="Tokelau">Tokelau</option>
   <option value="Tonga">Tonga</option>
   <option value="Trinidad & Tobago">Trinidad & Tobago</option>
   <option value="Tunisia">Tunisia</option>
   <option value="Turkey">Turkey</option>
   <option value="Turkmenistan">Turkmenistan</option>
   <option value="Turks & Caicos Is">Turks & Caicos Is</option>
   <option value="Tuvalu">Tuvalu</option>
   <option value="Uganda">Uganda</option>
   <option value="United Kingdom">United Kingdom</option>
   <option value="Ukraine">Ukraine</option>
   <option value="United Arab Erimates">United Arab Emirates</option>
   <option value="United States of America">United States of America</option>
   <option value="Uraguay">Uruguay</option>
   <option value="Uzbekistan">Uzbekistan</option>
   <option value="Vanuatu">Vanuatu</option>
   <option value="Vatican City State">Vatican City State</option>
   <option value="Venezuela">Venezuela</option>
   <option value="Vietnam">Vietnam</option>
   <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
   <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
   <option value="Wake Island">Wake Island</option>
   <option value="Wallis & Futana Is">Wallis & Futana Is</option>
   <option value="Yemen">Yemen</option>
   <option value="Zaire">Zaire</option>
   <option value="Zambia">Zambia</option>
   <option value="Zimbabwe">Zimbabwe</option>
  </select>
</form>
  </div>

  <div className='col'>
    <span id="span-el"><img src= {Avater} height ="15" width="15" alt='Location' />  PERSONS</span>
    <form>
  <select name="persons" id="form-el">
    <option value="1 Person">1 Person</option>
    <option value="2 Persons">2 Persons</option>
    <option value="3 Persons">3 Persons</option>
    <option value="4 Persons">4 Persons</option>
  </select>
</form>
  </div>

  <div className='col'>
    <span id="span-el"><img src= {Calender} height ="15" width="15" alt='check in' />  CHECK IN</span>
    <form>
    <input type="date" id="form-el" name='checkin'/>
</form>
  </div>

  <div className='col'>
    <span id="span-el"><img src= {Calender} height ="15" width="15" alt='check out' />  CHECK OUT</span>
    <form>
    <input type="date" id="form-el" name='checkout'/>
</form>
  </div>

  <div className='col'>
    <Button type="button" href=' https://bitbook.net/?refId=sB2c54Gk2'>Book Trip 
   <IoIosAirplane style={{marginLeft:'6px'}}/></Button></div>
</div>
</div>

<div className='section-el2'>
<div className='row'>
  <div className='col'><h1><SiNike style={{color:'gray'}} /></h1></div>
  <div className='col'><h1><FaApplePay style={{color:'gray'}} /></h1></div>
  <div className='col'><h1><FaCcMastercard style={{color:'gray'}} /></h1></div>
  <div className='col'><h1><AiOutlineStar style={{color:'gray'}} /></h1></div>
  <div className='col'><h1><FaCcMastercard style={{color:'gray'}} /></h1></div>
</div>
</div>

<main className='main-el'>
<div className='map-el'>
  <h2>Creating the best <span>ice-cold!</span> experience<br/> you would never forget.</h2>
  <p>Would you explore nature paradise in the world, find the<br/> best destination in the world with us.</p>
  <h4>View Regions available</h4>
<h1><HiOutlineArrowNarrowDown style={{color:'blue', fontSize:'40px', marginTop:'-50px'}} /></h1>
</div>

<Container fluid>
  <Row>
    <Col className='col1-el'><img src= {Photo1} height ="100%" width="100%" alt='Tourist' /></Col>
    <Col className='col1-el'><img src= {Photo2} height ="100%" width="100%" alt='Tourist' /></Col>
    <Col className='col1-el'><img src= {Photo3} height ="100%" width="100%" alt='Tourist' /></Col>
  </Row>
</Container>
<Container fluid className='Picture-el'>
<Row>
  <Col className='first-col'><h3>The best resorts to chill <br /> and relax</h3>
  <img src= {Picture1} alt='Tourist'/>
  <img src= {Picture2} alt='Tourist'/>
  </Col>
  <Col className='second-col'>
  <a href='#'><img src= {Picture3}  alt='Tourist'/></a>
  <img src= {Picture4}  alt='Tourist'/>
  </Col>
</Row>
</Container>
<Container fluid className='view-passes'>
  <a  href="#"><img src= {Picture5} alt='Tourist'/></a>
</Container>

<Container fluid className='social'>
  <Row>
    <Col>
    <img src= {Airplane} height ="20" width="40" alt='Logo' className='logo' />
    <h3>Artic Travels</h3>
    <p>Book your trip in minutes, get full <br/> control for much longer.</p>
    <FaFacebookF id='icon'/> <FaInstagram id='icon'/> <FaTwitter id='icon'/>
    </Col>
    <Col>
    <Row>
      <Col>
      <Nav.Link href="#link" id='link-el'>COMPANY</Nav.Link>
      <ul className='list-el'>
        <li><a href="#">About</a></li>
        <li><a href="#">careers</a></li>
        <li><a href="#">Mobile</a></li>
      </ul>
      </Col>

      <Col>
      <Nav.Link href="#link" id='link-el'>CONTACT</Nav.Link>
      <ul className='list-el'>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Affiliates</a></li>
      </ul>
      </Col>

      <Col>
      <Nav.Link href="#link" id='link-el'>MORE</Nav.Link>
      <ul className='list-el'>
        <li><a href="#">Airlines</a></li>
        <li><a href="#">Air fees</a></li>
        <li><a href="#">Low fare Tips</a></li>
      </ul>
      </Col>
    </Row>
    </Col>
  </Row>
</Container>
</main>

<footer>
  <Container className='footer-el'>
<Row>
<Col><a href="/rodax-tours" id='allright-el'>© 2022 Arctic Travels - All right reserved.</a></Col>
  <Col><a href="#" id='allright-el'>Privacy Policy</a></Col>
  <Col><a href="#" id='allright-el'>Terms of Use</a></Col>
</Row>
</Container>
</footer>
</div>
  )
}
