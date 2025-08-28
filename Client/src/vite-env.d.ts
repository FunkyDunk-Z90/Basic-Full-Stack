/// <reference types="vite/client" />

type tEventTypes = ChangeEvent | MouseEvent | MouseEventHandler<HTMLElement>
type tBtnRef = RefObject<HTMLButtonElement>

interface iLinks {
    linkName: string
    url: string
    icon?: string
}
