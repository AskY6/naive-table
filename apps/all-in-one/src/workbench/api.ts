import { NoneType } from "@/core/base/functional"

/**
 * facade api return to caller
 */
export type IWorkbenchEntry = {
    startup: NoneType
}

/**
 * necessary options to build a workbench
 */
export type IWorkbenchConstructionOptions = {
    id: string
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