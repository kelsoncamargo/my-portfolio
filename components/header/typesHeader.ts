
// EXPORTS
    // INTERFACES
        export interface headerTypes{
            h1Head: string
            links: Links
            messageAlert?: string
        }
    // INTERFACES
// EXPORTS




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
