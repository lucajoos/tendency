import tendency, { group } from '../src/tendency'
import { expect } from 'chai'

describe('group()', () => {
  describe('basic behaviour', () => {
    it('escape invalid conditions', () => {
      const result = tendency(true, 'a', group(false, 'b', group(true, 'c')), group('d'))
      expect(result).to.equal('a d')
    })
  })

  describe('nested behaviour', () => {
    it('flatten 1 level', () => {
      const result = tendency(group('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('flatten 2 levels', () => {
      const result = tendency(group(group('a', 'b', 'c')))
      expect(result).to.equal('a b c')
    })

    it('flatten 3 levels', () => {
      const result = tendency(group(group(group('a', 'b', 'c'))))
      expect(result).to.equal('a b c')
    })

    it('flatten complex pattern', () => {
      const result = tendency(group('a', group(group('b', group(group('c'))))))
      expect(result).to.equal('a b c')
    })
  })
})
