import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import * as React from 'react';
import styles from '../Login.module.css'

const SocialMediaOptions: React.FunctionComponent = () => {
  return <div className={styles.social_icons}>
  <a href="#" className='icon'>
      <FontAwesomeIcon icon={faGooglePlusG} />
  </a>
  <a href="#" className='icon'>
      <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="#" className='icon'>
      <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="#" className='icon'>
      <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>;
};

export default SocialMediaOptions;
