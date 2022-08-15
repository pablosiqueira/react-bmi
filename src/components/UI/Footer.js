import React from 'react'
import styles from './Footer.module.css'
import Button from 'react-bootstrap/esm/Button'
import {TbMail, TbBrandLinkedin, TbNews, TbBrandGithub} from 'react-icons/tb'

const Footer = () => {

    return <footer className={styles.footer}>
      <div className={styles.description}>
          <div className={styles.about}>
            <h6 className='mb-2'>About</h6>
            <p className="text-justify nav_item">Web page created by Pablo Siqueira. Bachelor in Computer Engineering and Science & Techonology 
              by the Federal University of Rio Grande do Norte (UFRN) from Brazil and former exchange student of the Lappeeranta 
              University of Technology (LUT) in Finland.</p>
          </div>

          <div className={styles.contact}>
            <h6>Contact & Networks</h6>
            <ul className={styles.footerlinks}>
              <li><Button className={styles.btnNone} variant="outline-light" size="sm"><TbMail size='2rem' title='Mail Icon'/> pablo16@outlook.com</Button></li>
              <li><Button variant="outline-light" size="sm" href="https://www.linkedin.com/in/pablo-siqueira-457867150/" target="_blank"><TbBrandLinkedin size="2rem" title='Linkedin Icon'/> Linkedin</Button></li>
              <li><Button variant="outline-light" size="sm" href='http://lattes.cnpq.br/9695010765251628' target="_blank"><TbNews size='2rem' title='Curriculum Lattes Icon'/> Curriculum Lattes</Button></li>
              <li><Button variant="outline-light" size="sm" href='https://github.com/pablosiqueira' target="_blank"><TbBrandGithub size="2rem" title='Github Icon'/> Github</Button></li>
            </ul>
          </div>
      </div>

      <div className={styles.copyright}>
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Pablo Siqueira. </p>
      </div>
</footer>
} 

export default Footer