import { createRoot } from 'react-dom/client'

const DefaultView: React.FC<{}> = () => {
    return <div>Hello React!</div>
}

export type RenderOptions = {
    root: HTMLElement
}
const render = (options: RenderOptions) => {
    createRoot(options.root).render(<DefaultView />)
}

export { render }