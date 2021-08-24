export default interface Project {
    name: string
    start: Date
    end?: Date
    //imgUrl?: string
    description: string
    sourceUrl: string
    demoUrl?: string
    skills: string[]
}

export const getDuration = (p: Project) => {
    const startStr = `${p.start.getMonth()+1}/${p.start.getFullYear()} to\n`
    const endStr = (p.end) ? `${p.end.getMonth()+1}/${p.end.getFullYear()}` : 'Present'
    return startStr + endStr
}