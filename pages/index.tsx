//IMPORTS
  import Header from '../components/header/Header';
  import styles from '../styles/Home.module.css'
//IMPORTS

export default function Home() {  
  //TYPES
    type Link = {
      nameLink: string
      execAlert: boolean
      linkId: string
    }

    type Links = [
        Link?,
        Link?,
        Link?,
        Link?,
        Link?
    ]
  //TYPES

  //VARIABLES
    const links:Links= [{
        nameLink: 'Home',
        execAlert: true,
        linkId: "link1"
      },
      {
        nameLink: 'Services',
        execAlert: true,
        linkId: "link2"
      },
      {
        nameLink: 'About',
        execAlert: true,
        linkId: "link3"
      },
      {
        nameLink: 'Contact',
        execAlert: true,
        linkId: "link4"
      }
    ]
  //VARIABLES

  return (
    <div id={styles.body}>
      <Header
        h1Head='PORTLOFIO'
        links={links}
        messageAlert='This part of my portfolio is still under development'
      />
    </div>
  )
}
