# DOCUMENTATION OF A PORTFOLIO
Hellow! Welcome to my portfolio documentation. here you will find detailed information about the components and resources used in my portfolio project.

### <b>Technologies</b>
- NEXT.JS
- TYPESCRIPT


### <b>Components</b>
- [Header Component](#header-component)
- [Alert Component](#alert-component)

<br>

---

## Header Component

The header component is the header of the page, which contains the logo, navigations links and other importantes information for the user. It gets the following properties:

### <b>Props</b>
- <b>h1Head(string)</b> - The main text of the Header.
- <b>links(Array<link>)</b> - An array of Link objects representing the header navigation links.
- <b>Alert(opcional)(string)</b> - An alert message that will be displayed when a links is clicked. The default value is 'defautl'

### <b>Type Links</b>
The Links type is an array of links objects thar represent the Header component's navigation links.

<b>Type: Links</b>
~~~ts
type Link = {
  nameLink: string
  execAlert: boolean
  linkId: string
}
~~~

<b>Type: Header</b>
~~~ts
interface HeaderTypes{
  h1Head: string
  links: Links
  messageAlert?: string
}
~~~

### Example of use
~~~ts
import Header from '@/components/header/Header';

const App = () => {
  const links = [
    {
      nameLink: 'Home',
      execAlert: true,
      linkId: 'link1'
    },
    {
      nameLink: 'Services',
      execAlert: true,
      linkId: 'link2'
    },
    {
      nameLink: 'About',
      execAlert: true,
      linkId: 'link3'
    },
    {
      nameLink: 'Contact',
      execAlert: true,
      linkId: 'link4'
    }
  ];

  return (
    <div>
      <Header
        h1Head='PORTLOFIO'
        links={links}
        messageAlert='This part of my portfolio is still under development'
      />
    </div>
  );
}

export default App;

~~~

<br>

# Alert Component
The alert  component is used para display an alert message when an event is triggered, based on the alert(<b>boolean</b>) property that determines wheter the alert property should be active or not, passed to the component. This component has the following properties:

### <b>Props</b>
- <b>alert(boolean)</b>: 
