import tendency, { every } from '../src/tendency'
import { expect } from 'chai'

describe('every()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency(every('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('without conditions multiple calls', () => {
      const result = tendency(every('a'), every('b'), every('c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition', () => {
      const result = tendency(true, every('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition multiple calls', () => {
      const result = tendency(true, every('a'), every('b'), every('c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions', () => {
      const result = tendency(true, true, every('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions multiple calls', () => {
      const result = tendency(true, every('a'), true, every('b'), every('c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions', () => {
      const result = tendency(true, true, true, every('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions multiple calls', () => {
      const result = tendency(true, every('a'), true, every('b'), true, every('c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, every('a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('only invalid conditions multiple calls', () => {
      const result = tendency(false, every('a'), every('b'), every('c'))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, false, every('a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('mixed conditions multiple calls', () => {
      const result = tendency(true, false, every('a'), every('b'), every('c'))
      expect(result).to.equal('')
    })
  })

  describe('nested behaviour', () => {
    it('without conditions', () => {
      const result = tendency(every('a', every('b', every('c'))))
      expect(result).to.equal('a b c')
    })

    it('complex without conditions', () => {
      const result = tendency(every('a', 'b', every('c', 'd', every('e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('valid conditions', () => {
      const result = tendency(true, every(true, 'a', every(true, 'b', every(true, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('complex valid conditions', () => {
      const result = tendency(true, every(true, 'a', 'b', every(true, 'c', 'd', every(true, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('invalid conditions', () => {
      const result = tendency(false, every('a', [false, every('b', [false, every('c')])]))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, every('a', [false, every('b', [true, every('c')])]))
      expect(result).to.equal('a')
    })
  })
})
