export interface HeaderTypes{
    h1Head: string
    links: Links
    messageAlert?: string
}

export interface AlertBuildTypes{
    alert: boolean
    execAlert(params:boolean):void
    messageAlert: string
}

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
