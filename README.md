# <b>DOCUMENTATION OF A PORTFOLIO</b>
Hellow! Welcome to my portfolio documentation. here you will find detailed information about the components and resources used in my portfolio project.

My ultimate goal is to create a personal portfolio to showcase my skills and knowledge. During the development process, I am improving my skills in Next, TypeScript and good development practices. However, my main goal is to learn how to document my code correctly and I'm using this opportunity to learn how to do such documents.

### <b>Technologies</b>
- NEXT.JS
- TYPESCRIPT


### <b>Components</b>
- [Header Component](#header-component)
- [Alert Component](#alert-component)

<br>

---

## <b>Header Component</b>

The header component is the header of the page, which contains the logo, navigations links and other importantes information for the user. It gets the following properties:

### <b>Props</b>
- <b>h1Head(string)</b> - The main text of the Header.
- <b>links(Array(link))</b> - An array of Link objects representing the header navigation links.
- <b>Alert(opcional)(string)</b> :
  -  This is the value passed in the alert message, which will be displayed when the user ckicks on the link where the "execAlert" property = true.
  - This functionality was created to be triggered when the exposed link is note yet ready for acess, and then with the [Alert component](#alert-component) it is possible to inform the visitor of this.

### <b>Type Links</b>
The Links type is an array of links objects thar represent the Header component's navigation links.

<b>Type: Link</b>
~~~ts
type Link = {
  nameLink: string
  execAlert: boolean
  linkId: string
}
~~~

<b>Type: Links</b>
~~~ts
type Links = [
            Link?,
            Link?,
            Link?,
            Link?,
            Link?
      ]
~~~

<b>Type: Header</b>
~~~ts
interface HeaderTypes{
  h1Head: string
  links: Links
  messageAlert?: strin
}
~~~

### Example of use
~~~ts
// IMPORTS
  import Header from '@/components/header/Header';
// IMPORTS

const App = () => {
  // TYPES
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
  // TYPES

  // VARIABLES
    const links:Links, naxdknadjklqawdjowasdjklw  = [
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
  // VARIABLES

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
