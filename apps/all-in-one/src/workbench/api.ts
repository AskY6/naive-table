/**
 * facade api return to caller
 */
export type IWorkbenchEntry = {

}

/**
 * necessary options to build a workbench
 */
export type IWorkbenchConstructionOptions = {
    parent: HTMLElement
}

/**
 * external dependency declear
 * ! not use now
 */
type Service = {}
export type WorkBenchDependencyEnv = {
    services: Service[]
}