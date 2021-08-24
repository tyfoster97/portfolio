/**
 * @jest-environment node
 */
import Project, { getDuration } from "../utils/Project"

describe('getDuration', () => {
    const today = new Date()
    const p: Project = {
        name: '',
        start: today,
        description: '',
        sourceUrl: '',
        skills: []
    }

    it('should return defaults', () => {
        expect(getDuration(p)).toEqual(`${today.getMonth()+1}/${today.getFullYear()} to\nPresent`)
    })

    it('should return specific range', () => {
        p.start = new Date(2020, 8)
        p.end = new Date(2020, 11)
        expect(getDuration(p)).toEqual('9/2020 to\n12/2020')
    })
})