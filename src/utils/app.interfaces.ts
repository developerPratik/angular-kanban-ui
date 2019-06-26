
export enum ENgxContainer {
    'container' = 'container'
}

export enum ENgxOrientation {
    'vertical' = 'vertical',
    'horizontal' = 'horizontal'
}

interface ISmoothDndProps {
    orientation: ENgxOrientation,
    className?: string
}

interface INgxMailGroup {
    id: string | number
    type: ENgxContainer,
    name: string,
    props: ISmoothDndProps,
    mails?: INgxMail[]
}

export interface INgxMail {
    mailAddress: string,
    name: string,
    avatar: string,
    props: {
        className: string
    }
}

export interface INgxDnd {
    type: ENgxContainer;
    props: ISmoothDndProps,
    mailGroups: INgxMailGroup[]
};




